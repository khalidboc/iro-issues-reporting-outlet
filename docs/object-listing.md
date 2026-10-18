# Object listing — IRO

| Object | Responsibility | Fields or operations |
|---|---|---|
| Issue | One report | id, reporter, community, category, title, detail, place, urgency, status, createdAt |
| Reporter | Who files | Student or Indigene |
| Community | Where | AAUA campus, Akungba, Iwaro, Etioro, Ayegunle, Other |
| Category | Kind | Security, Water, Power, Roads, Hostel, Harassment, Health, Waste, Other |
| Status | Progress | Open, In review, Resolved |
| IssueStore | Browser store | loadIssues, saveIssues, nextId |
| ReportForm | Capture | checks length, creates an Open issue |
| ReportBoard | Display | filters and desk status buttons |

Print `docs/iro-standalone.html` as the code listing (font size 10), with this file, the SRS, the use-case SVG, and the Ishikawa SVG.
