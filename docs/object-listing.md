# Object listing — IRO

| Object | Responsibility | Main fields / operations |
|---|---|---|
| Issue | One community report | id, reporter, community, category, title, detail, place, urgency, status, createdAt |
| Reporter | Person filing | Student or Indigene |
| Community | Where it happened | AAUA campus, Akungba, Iwaro, Etioro, Ayegunle, Other |
| Category | Kind of problem | Security, Water, Power, Roads, Hostel, Harassment, Health, Waste, Other |
| Status | Desk progress | Open, In review, Resolved |
| IssueStore | Persistence on the browser | loadIssues(), saveIssues(), nextId() |
| ReportForm | Capture | validates length, creates Issue with status Open |
| ReportBoard | Display | filters, open-count, desk status buttons |

Code listing: `docs/iro-standalone.html`, `src/lib/iro.ts`, `src/routes/index.tsx`.
