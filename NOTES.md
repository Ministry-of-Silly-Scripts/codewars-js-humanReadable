# Notes

## Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (`HH:MM:SS`)

`HH` = hours, padded to 2 digits, range: 00 - 99
`MM` = minutes, padded to 2 digits, range: 00 - 59
`SS` = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (`99:59:59`)

You can find some examples in the test fixtures.

## Domain

- non-negative integer (seconds)
- human-readable format (`HH:MM:SS`)
- Maximum time 359999 seconds

## Backlog

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR

### Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain description ✅
- backlog
- perform the 'canary' test just to check if the structure works ✅
- it should return 00:00:00 for input equal to 0 
- seconds conversion
  - it should return 00:00:30 for input equal to 30 ✅
  - it should return 00:00:59 for input equal to 59 ✅
- minutes conversion
  - it should return 00:01:00 for input equal to 60 ✅
  - it should return 00:59:59 for input equal to 3599 ✅
- hours conversion
  - it should return 01:00:00 for input equal to 3600 ✅
  - it should return 99:59:59 for input equal to 359999 ✅