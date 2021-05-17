### Problem

Packages end up in the wrong hands

### Proposal

An application that alerts registered users

### Project

---

<space><space>

| _Backend_ | _Database_ | _Client_ |
| --------- | ---------- | -------- |
| Graphql   | MongoDb    | React    |

---

### Functionality

- The recipient of the package scans a label
- This will alert the correct recipient of the package
- The correct recipient will have the option to dm their "buddy"

### Schema

---

<space><space>

| User(buddy) | Type || Label|Type|
| ----------- | ------ ||------|------|
| id | Number || id|Number|
| email | String ||created-date|Number|
| first-name | String ||zip-code| Number |
| last-name | String ||descriptions| String |

---
