# Software Requirements Specification

**System:** IRO — Issues Reporting Outlet
**Course:** CSC426 Weekly Dev, Weekend 3
**Institution:** Adekunle Ajasin University, Akungba-Akoko
**Prepared by:** Alao Khalid (khalidboc)
**Date:** 18 October 2026
**Version:** 1.0

## 1. Purpose and scope
IRO lets AAUA students and indigenes of Akungba, Iwaro, Etioro, and Ayegunle report community issues, and lets a desk mark each report Open, In review, or Resolved. It is a small browser app. Reports stay on that browser. There is no SMS, email, payment, or shared database. That limit matches the short submission window and the sensitivity of the reports.

## 2. Users
- Student: hostel, campus security, power, water, lecture access.
- Indigene: town problems that also affect students (roads, water, waste, harassment).
- Desk: reads reports and moves status.

## 3. How the parts interact
1. Report form collects reporter type, community, category, urgency, title, place, and description. It checks length, assigns an id such as IRO-1043, and sets status to Open.
2. Issue store reads and writes the list in the browser (localStorage key iro-issues-v1). Seed reports load the first time.
3. Report board filters by community and category.
4. Desk mode is a checkbox. When it is on, each card can move to Open, In review, or Resolved.

Flow: Reporter to form to store to board. Desk to status control to store to board.

## 4. Functional requirements
- FR-1 Accept a report from a Student or an Indigene.
- FR-2 Require a community: AAUA campus, Akungba, Iwaro, Etioro, Ayegunle, or Other.
- FR-3 Require a category: Security, Water, Power, Roads, Hostel, Harassment, Health, Waste, or Other.
- FR-4 Require a title (at least 8 characters), a place (at least 3), and a description (at least 12).
- FR-5 Record urgency as Low, Normal, or High.
- FR-6 Give each new report a unique id and status Open.
- FR-7 List reports newest first.
- FR-8 Filter by community and by category, including All.
- FR-9 Show how many reports are not Resolved.
- FR-10 In desk mode, allow status Open, In review, or Resolved.
- FR-11 Keep reports after refresh on the same browser.
- FR-12 Show a confirmation that includes the new id.

## 5. Non-functional requirements
- NFR-1 One main form. Controls are at least 44px tall on a phone.
- NFR-2 Filter and save without a network call.
- NFR-3 If stored data is corrupt, fall back to the seed list.
- NFR-4 Run in a current phone or laptop browser.
- NFR-5 Do not ask for phone number, matric number, or house address. Place is a landmark.
- NFR-6 Communities and categories live in one module.
- NFR-7 Fields have visible labels. Status is text, not colour alone.
- NFR-8 No account system in this version, so there is no password store.

## 6. Object listing
- Issue: id, reporter, community, category, title, detail, place, urgency, status, createdAt
- ReportForm: the fields in FR-1 to FR-5
- IssueStore: loadIssues, saveIssues, nextId
- ReportBoard: community filter, category filter, desk flag
- Status: Open, In review, Resolved

## 7. Related files
- docs/questionnaire.md — paste into Google Forms
- docs/usecase.svg and docs/usecase.drawio
- docs/ishikawa.svg and docs/ishikawa.drawio
- docs/iro-standalone.html — mini interface and code listing
