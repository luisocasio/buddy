### Problem

Packages end up in the wrong hands

### Proposal

An application that alerts registered users

### Project

---

<space><space>

| _Backend_ | _Database_ | _Client_ | _ORM_    |
| --------- | ---------- | -------- | -------- |
| Graphql   | MongoDB    | React    | Mongoose |

---

### Functionality

- The recipient of the package scans a label
- This will alert the correct recipient of the package
- The correct recipient will have the option to dm their "buddy"

### Schema

---

<space><space>

| User(buddy) | Type   | UserDetails | Type   |
| ----------- | ------ | ----------- | ------ |
| id          | Number | address     | String |
| email       | String | zip-code    | Number |
| first-name  | String |
| last-name   | String |

---
