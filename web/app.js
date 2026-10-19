// IRO - Issues Reporting Outlet
// Simple client-side prototype using localStorage

const STORAGE_KEY = 'iro_issues_v1';

function getIssues() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveIssues(issues) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}

function generateId() {
  return 'IRO-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
}

function submitIssue(e) {
  e.preventDefault();
  const isAnonymous = document.getElementById('anonymous').checked;
  const contactVal = document.getElementById('contact').value.trim();

  const issue = {
    id: generateId(),
    reporterType: document.getElementById('reporterType').value,
    location: document.getElementById('location').value,
    category: document.getElementById('category').value,
    title: document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    contact: isAnonymous ? '' : contactVal,
    anonymous: isAnonymous,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  const issues = getIssues();
  issues.unshift(issue);
  saveIssues(issues);

  document.getElementById('issueForm').reset();
  const toast = new bootstrap.Toast(document.getElementById('successToast'));
  toast.show();

  updateStats();
  setTimeout(() => showSection('view'), 800);
  return false;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
         ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

function statusBadge(status) {
  const map = {
    'Pending': 'bg-warning text-dark',
    'In Progress': 'bg-info text-dark',
    'Resolved': 'bg-success',
    'Closed': 'bg-secondary'
  };
  return `<span class="badge ${map[status] || 'bg-secondary'} badge-status">${status}</span>`;
}

function loadIssues() {
  const issues = getIssues();
  const list = document.getElementById('issuesList');
  const empty = document.getElementById('noIssues');

  if (issues.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('d-none');
    return;
  }
  empty.classList.add('d-none');

  list.innerHTML = issues.map(issue => `
    <div class="col-md-6 col-lg-4">
      <div class="card issue-card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="badge bg-primary-subtle text-primary">${issue.category}</span>
            ${statusBadge(issue.status)}
          </div>
          <h6 class="card-title mb-1">${escapeHtml(issue.title)}</h6>
          <p class="card-text small text-muted mb-2" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">
            ${escapeHtml(issue.description)}
          </p>
          <div class="small text-muted">
            <div><i class="bi bi-geo-alt"></i> ${escapeHtml(issue.location)} • ${escapeHtml(issue.reporterType)}</div>
            <div><i class="bi bi-clock"></i> ${formatDate(issue.createdAt)}</div>
            <div class="mt-1 text-secondary" style="font-size:0.7rem;">ID: ${issue.id}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function updateStats() {
  const issues = getIssues();
  document.getElementById('stat-total').textContent = issues.length;
  document.getElementById('stat-pending').textContent = issues.filter(i => i.status === 'Pending').length;
  document.getElementById('stat-resolved').textContent = issues.filter(i => i.status === 'Resolved').length;
  document.getElementById('stat-students').textContent = issues.filter(i => i.reporterType === 'Student' || i.reporterType === 'Both').length;
}

function showSection(name) {
  ['home', 'report', 'view', 'about'].forEach(s => {
    const el = document.getElementById('section-' + s);
    if (el) el.classList.toggle('d-none', s !== name);
    const nav = document.getElementById('nav-' + s);
    if (nav) nav.classList.toggle('active', s === name);
  });

  const stats = document.getElementById('stats-bar');
  if (name === 'view' || name === 'home') {
    stats.classList.remove('d-none');
    updateStats();
  } else {
    stats.classList.add('d-none');
  }

  if (name === 'view') loadIssues();
  if (name === 'home') {
    document.getElementById('section-home').classList.remove('d-none');
  }

  // Collapse mobile nav
  const collapse = document.querySelector('.navbar-collapse');
  if (collapse && collapse.classList.contains('show')) {
    new bootstrap.Collapse(collapse).hide();
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  // Seed one sample if empty (for demo)
  if (getIssues().length === 0) {
    const sample = {
      id: 'IRO-SAMPLE001',
      reporterType: 'Student',
      location: 'Akungba',
      category: 'Infrastructure',
      title: 'Broken street light near main gate road',
      description: 'The street light along the road leading to the university main gate has been non-functional for over two weeks, making the area dark and unsafe at night for students returning late.',
      contact: '',
      anonymous: true,
      status: 'Pending',
      createdAt: new Date(Date.now() - 86400000).toISOString()
    };
    saveIssues([sample]);
  }
});
