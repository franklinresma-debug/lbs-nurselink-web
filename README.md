# LBS NurseLink Frontend

Production frontend for LBS NurseLink, the applicant and administration portal served at https://lbs.amsertech.com.

## Stack

- React 19
- Vite
- React Router
- Static assets served by the production web root
- Backend API served from https://lbs.amsertech.com/backend

## Local Setup

`    npm install
cp .env.example .env
npm run dev`

Set VITE_API_URL in .env for the backend API you want to use.

## Build

`    npm run build`

The production server currently uses this equivalent build command when the npm shim is unavailable:

`    node node_modules/vite/bin/vite.js build && node scripts/generate-social-pages.mjs`

## Production

- Host: lbs.amsertech.com
- Server path: /var/www/lbs-nurselink-web
- Served directory: /var/www/lbs-nurselink-web/dist
- Main branch: main
- Backup branch from pre-sync GitHub state: github-main-backup-before-production-sync-20261012

## Deployment Notes

1. Back up the current production source/build before changing files.
2. Apply the frontend change.
3. Run the build command.
4. Verify the affected desktop and mobile workflows on https://lbs.amsertech.com.
5. Commit and push to GitHub.

## Public Repository Safety

This repository is public. Do not commit .env, private keys, database dumps, production logs, uploaded documents, or generated runtime folders.
