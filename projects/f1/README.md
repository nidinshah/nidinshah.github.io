# F1 2026 Race Calendar

A live Formula 1 race schedule for the 2026 season.

**Live site:** https://d9xvuvgbmczm7.cloudfront.net/

---

## Overview

Displays the full 22-race 2026 F1 calendar with a countdown to the next race, sprint weekend indicators, season progress, and email/SMS notifications before each race.

---

## AWS Services

| Service | Purpose |
|---------|---------|
| S3 | Hosts the static frontend |
| CloudFront | CDN — serves the site globally |
| EC2 | Runs the Node.js backend API |
| Lambda | Checks race schedule and triggers notifications |
| EventBridge | Runs Lambda daily via cron |
| SNS | Delivers email and SMS alerts |

---

## Stack

- Frontend — HTML, CSS, vanilla JS
- Backend — Node.js, Express
- Data — Jolpica F1 API
- Process manager — PM2

---

*Built by [@nidinshah](https://github.com/nidinshah)*
