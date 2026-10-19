# Software Requirements Specification (SRS)
## IRO – Issues Reporting Outlet

**Project Title:** IRO (Issues Reporting Outlet) – A Mini Web Platform for Relating and Reporting Issues concerning AAUA Students and Indigenes  

**Student Name:** Alao Khalid  
**Matriculation Number:** 220404237  
**Institution:** Adekunle Ajasin University, Akungba-Akoko (AAUA), Ondo State, Nigeria  
**Document Version:** 1.0  
**Date:** October 2026  

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for the **IRO (Issues Reporting Outlet)** system. IRO is a lightweight web-based platform that enables AAUA students and indigenes of surrounding communities (Akungba, Iwaro, Etioro, Ayegunle and nearby areas) to report issues affecting them in a structured, accessible manner.

The document is intended for academic evaluation, developers, and stakeholders involved in the project.

### 1.2 Scope
IRO provides a simple digital channel for:
- Submitting issue reports (with optional anonymity)
- Categorizing issues by type and location
- Viewing publicly listed reports
- Basic statistics on submitted issues

The current version is a **client-side prototype** (HTML, CSS, JavaScript) that stores data in the browser’s localStorage. It is designed for demonstration and academic submission, not as a production multi-user backend system.

**Out of scope for this mini version:** User authentication, server-side database, real-time notifications, administrative workflow engine, photo upload processing, and mobile native apps.

### 1.3 Definitions, Acronyms and Abbreviations
| Term | Definition |
|------|------------|
| IRO | Issues Reporting Outlet |
| AAUA | Adekunle Ajasin University, Akungba-Akoko |
| Indigene | Resident or native of the local communities (Akungba, Iwaro, Etioro, Ayegunle, etc.) |
| SRS | Software Requirements Specification |
| FR | Functional Requirement |
| NFR | Non-Functional Requirement |
| localStorage | Browser API for persistent client-side data storage |

### 1.4 References
- IEEE Std 830-1998 (Recommended Practice for Software Requirements Specifications) – adapted for academic mini-project
- Project feasibility study and community questionnaire
- Ishikawa (Fishbone) analysis of root causes of ineffective issue reporting

### 1.5 Overview
The remainder of this document describes the overall product, specific functional and non-functional requirements, and high-level interactions among components.

---

## 2. Overall Description

### 2.1 Product Perspective
IRO is a standalone, single-page web application. It operates entirely in the user’s browser. Future evolution could include a backend (Node.js / Firebase / PHP) and a simple admin dashboard, but these are outside the current scope.

### 2.2 Product Functions
Major functions:
1. Allow a user (Student or Indigene) to submit a structured issue report.
2. Store the report locally and display it in a public list.
3. Support categorization by reporter type, location and issue category.
4. Provide basic aggregate statistics.
5. Present clear information about the purpose of the platform.

### 2.3 User Characteristics
- **Primary users:** AAUA undergraduate/postgraduate students and local community members (varying levels of digital literacy).
- Expected to use smartphones or low-end computers with basic internet.
- May prefer simple English; some may be more comfortable with Pidgin expressions (interface remains clear English).

### 2.4 Constraints
- Must remain simple (minimal pages, no complex frameworks beyond Bootstrap CDN).
- Data persistence limited to browser localStorage for this prototype.
- No server costs or backend complexity for the academic submission.
- Must clearly distinguish and serve both Students and Indigenes.

### 2.5 Assumptions and Dependencies
- Users have a modern browser (Chrome, Firefox, Edge, Safari) that supports localStorage and ES6 JavaScript.
- Internet is available at least for loading the page and Bootstrap CDN (or the page can be hosted offline after download).
- Users understand the voluntary and academic nature of the prototype.

---

## 3. Specific Requirements

### 3.1 Functional Requirements

**FR1 – Submit Issue Report**  
The system shall allow a user to submit a new issue report containing:  
- Reporter type (Student / Indigene / Both)  
- Location (Akungba, Iwaro, Etioro, Ayegunle, Campus, Other)  
- Issue category (Security, Infrastructure, Utilities, Environment, Academic, Health, Transport, Other)  
- Title (short summary)  
- Detailed description  
- Optional contact information  
- Option to submit anonymously  

**FR2 – Generate Unique Report Identifier**  
Each submitted report shall be assigned a unique ID (e.g., IRO-XXXX).

**FR3 – Persist Reports**  
Submitted reports shall be stored persistently in the browser (localStorage) so they survive page refreshes within the same browser/device.

**FR4 – View Public Reports**  
Any visitor shall be able to view a list of previously submitted reports showing category, title, truncated description, location, reporter type, status and timestamp.

**FR5 – Display Status**  
Each report shall have a status (default: “Pending”). (Future admin can change status; current prototype shows the field.)

**FR6 – Basic Statistics**  
The system shall display simple counts: Total reports, Pending, Resolved, and number originating from Students.

**FR7 – Form Validation**  
Required fields (reporter type, location, category, title, description) must be completed before submission is accepted.

**FR8 – Success Feedback**  
After successful submission the user shall receive clear visual confirmation and be directed toward the reports list.

**FR9 – Navigation**  
The interface shall provide clear navigation among Home, Report Issue, View Reports and About sections.

**FR10 – About / Attribution**  
The system shall display project title, student name (Alao Khalid), matric number (220404237) and institutional affiliation.

### 3.2 Non-Functional Requirements

**NFR1 – Usability**  
- The interface shall be simple, clean and usable by users with basic digital literacy.  
- Forms shall use familiar controls (dropdowns, text fields, checkboxes).  
- Mobile-responsive layout (Bootstrap) so the application works on smartphones common among students and community members.

**NFR2 – Performance**  
- Page load and form submission shall feel instantaneous on typical campus/community internet (no heavy assets beyond CDN Bootstrap).  
- Rendering of up to several dozen reports shall remain smooth.

**NFR3 – Reliability**  
- Data written to localStorage shall remain available across sessions on the same browser until cleared by the user.  
- The application shall not crash on empty data or missing optional fields.

**NFR4 – Privacy & Security (Prototype level)**  
- Users may choose to submit anonymously (contact field suppressed).  
- No passwords or sensitive personal data are required.  
- Note: localStorage is not encrypted and is browser-specific; this is acceptable for an academic prototype.

**NFR5 – Portability**  
- The application shall run on any modern browser without installation.  
- Source files (HTML/CSS/JS) can be opened offline or hosted on any static file server / GitHub Pages.

**NFR6 – Maintainability**  
- Code shall be clearly structured, commented where helpful, and separated into HTML structure, CSS styling and JavaScript logic.  
- Adding a new issue category or location shall require only a small change in the HTML select options.

**NFR7 – Accessibility (basic)**  
- Form labels shall be properly associated with controls.  
- Colour contrast shall be sufficient for readability.  
- Interactive elements shall be keyboard-reachable where possible.

---

## 4. System Architecture (High-Level)

```
[User Browser]
     |
     v
[ index.html ]  <--- Bootstrap CDN (styling)
     |
     +-- [ app.js ]  (logic: form handling, localStorage CRUD, rendering)
     |
     v
[ localStorage ]  (persistent store of Issue objects)
```

**Major Components:**
1. **Presentation Layer** – HTML structure + Bootstrap CSS  
2. **Application Logic** – JavaScript (submitIssue, loadIssues, updateStats, showSection)  
3. **Data Layer** – Browser localStorage holding an array of Issue objects  

**Issue Object (conceptual):**  
`{ id, reporterType, location, category, title, description, contact, anonymous, status, createdAt }`

---

## 5. Object / Component Listing

| Object / Component | Responsibility |
|--------------------|----------------|
| Issue | Data structure representing one reported problem |
| localStorage (iro_issues_v1) | Persistent storage of the list of Issues |
| submitIssue() | Validates form, creates Issue, saves, shows feedback |
| loadIssues() | Reads storage and renders public list cards |
| updateStats() | Computes and displays aggregate counts |
| showSection() | Controls single-page navigation between views |
| generateId() | Creates unique report identifier |
| escapeHtml() | Basic XSS protection when rendering user text |

---

## 6. Appendices

### Appendix A – Related Documents
- Community Questionnaire (Google Form design)
- Ishikawa (Fishbone) Diagram
- Use-Case Diagram
- Source code listing (index.html, app.js)

### Appendix B – Future Enhancements (Out of Current Scope)
- Server-side database and multi-user support
- Admin login and status update workflow
- Email/SMS notification stubs
- Photo evidence upload
- Filtering and search on the public list
- Simple analytics dashboard

---

**Document prepared by:** Alao Khalid (220404237)  
**For academic submission under Software Engineering / related course requirements.**
