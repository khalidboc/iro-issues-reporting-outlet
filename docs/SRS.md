# Software Requirements Specification

**Project:** IRO (Issues Reporting Outlet)
**Course:** CSC426
**School:** Adekunle Ajasin University, Akungba-Akoko
**Name:** Alao Khalid

## 1. Purpose
IRO is a small web page where a student or an indigene reports a problem around AAUA and the nearby communities (Akungba, Iwaro, Etioro, Ayegunle). A desk person can later mark the report as open, in review, or resolved.

The page does not take phone numbers or house addresses. Reports are stored in the browser that submitted them. This version has no login and no shared database.

## 2. Users
- Student — reports hostel, light, water, security, or the road to class.
- Indigene — reports the same kinds of problems in the town.
- Desk — reads the list and changes the status.

## 3. How the parts work together
The report form takes who is reporting, the community, the category, how urgent it is, a title, the place, and a short description. If the title, place, or description is too short, the page asks again. If it is accepted, the report gets an id like IRO-1043 and the status Open.

The list shows the reports, newest first. Two dropdowns filter by community and by category. A checkbox called Desk mode shows buttons to set Open, In review, or Resolved. Turning the checkbox off only hides the buttons. It does not delete the report.

The store is `localStorage` on that browser. Three sample reports are loaded the first time so the list is not empty.

## 4. Functional requirements
1. The user must say if they are a student or an indigene.
2. The user must pick a community: AAUA campus, Akungba, Iwaro, Etioro, Ayegunle, or Other.
3. The user must pick a category: Security, Water, Power, Roads, Hostel, Harassment, Health, Waste, or Other.
4. Title, place, and description cannot be empty. Title at least 8 characters, place at least 3, description at least 12.
5. Urgency is Low, Normal, or High.
6. A new report starts as Open and gets the next id.
7. The list can be filtered by community and by category.
8. The page shows how many reports are not yet resolved.
9. In desk mode, status can be changed to Open, In review, or Resolved.
10. Refreshing the page keeps the reports on that same browser.
11. After submit, the page shows the new id.

## 5. Non-functional requirements
1. One form is enough. Buttons are large enough to tap on a phone.
2. Saving and filtering do not need internet after the page has loaded.
3. If the saved data is bad, the page goes back to the sample reports.
4. It should open in Chrome on a phone or a laptop.
5. The form does not ask for matric number, phone number, or a house address.
6. Labels are written out. Status is a word, not only a colour.

## 6. Outside this version
No account, no SMS, and no email from the page. The questionnaire is a separate Google Form (`docs/questionnaire.md`). The use-case and Ishikawa diagrams are in `docs/`.
