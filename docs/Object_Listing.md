# Object / Component Listing – IRO Project

**Student:** Alao Khalid  
**Matric No:** 220404237  

This listing describes the main logical objects and components used in the IRO mini web application.

---

## 1. Data Objects

### Issue
Represents a single reported problem.

| Attribute       | Type     | Description                                      |
|-----------------|----------|--------------------------------------------------|
| id              | String   | Unique identifier (e.g. IRO-XXXX)                |
| reporterType    | String   | "Student", "Indigene", or "Both"                 |
| location        | String   | Akungba / Iwaro / Etioro / Ayegunle / Campus / Other |
| category        | String   | Security, Infrastructure, Utilities, etc.        |
| title           | String   | Short summary (max ~100 chars)                   |
| description     | String   | Detailed free-text description                   |
| contact         | String   | Optional phone/email (empty if anonymous)        |
| anonymous       | Boolean  | Whether contact was suppressed                   |
| status          | String   | "Pending" (default), future: In Progress, Resolved |
| createdAt       | String   | ISO timestamp of submission                      |

### IssueCollection
Conceptual array of Issue objects stored under the key `iro_issues_v1` in localStorage.

---

## 2. UI / Presentation Components

| Component          | Description |
|--------------------|-------------|
| Navbar             | Top navigation (Home, Report Issue, View Reports, About) |
| Hero Section       | Landing banner with call-to-action buttons |
| Stats Bar          | Four summary cards (Total, Pending, Resolved, Students) |
| Report Form        | Structured form for submitting a new Issue |
| Issues List        | Responsive card grid displaying public reports |
| About Card         | Project description + student attribution |
| Success Toast      | Transient confirmation after submission |

---

## 3. Behavioural Components (JavaScript Functions)

| Function           | Responsibility |
|--------------------|----------------|
| getIssues()        | Retrieve and parse the Issue array from localStorage |
| saveIssues()       | Serialize and write the Issue array to localStorage |
| generateId()       | Produce a unique report ID |
| submitIssue(e)     | Handle form submit: validate → create Issue → persist → feedback |
| loadIssues()       | Render the public list of Issue cards |
| updateStats()      | Calculate and display aggregate statistics |
| showSection(name)  | Single-page navigation between Home / Report / View / About |
| formatDate(iso)    | Human-readable date formatting |
| statusBadge(status)| Return Bootstrap badge HTML for a given status |
| escapeHtml(text)   | Sanitize user-supplied text before insertion into DOM |

---

## 4. External Dependencies

- Bootstrap 5.3 (CSS + JS via CDN) – layout, components, responsive behaviour
- Bootstrap Icons – visual icons
- Browser localStorage API – persistence
- Native ES6+ JavaScript – no additional frameworks

---

**End of Object Listing**
