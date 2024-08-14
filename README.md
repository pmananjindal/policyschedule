# policyschedule

Requirements:
Design File: https://www.figma.com/file/c0NMgnEoPLv7VIJIhhkwZZ/UI-Engineer-Hiring-process-Artifact-(screens)-(copy)?type=design&node-id=0%3A1&mode=design&t=kXegUGNyEE4ZaFlq-1

Tooling: Next.js, Tailwind, Recharts, TypeScript, AdonisJS, Axios

Backend Implemented:

1. 2 calls. One is to get Time series data and second one is to post the data of Snapshot Policy Schedule

Frontend Implemented:

1. Use of Recharts and show Time series data by making API call
2. creation of dynamic form and on click of button, make an axios call to post data to backend

To setup backend project:

1. cd backend
2. npm install

if .env file is not present, create a new file as .env and .env.example and add below content in both files:
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=E5mgcHWJm0bLJrude-S8vpc0NuEYcIvp
NODE_ENV=development

To setup frontend project:

1. cd frontend
2. npm install

To run backend project, run command in terminal:
1.npm run dev

To run frontend project, run command in terminal:

1. npm run dev

To open frontend project, use http://localhost:3000
