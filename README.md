# My University Portal

My University Portal is a responsive student-services prototype built to explore how an AI-assisted university portal could help students understand academic information, discover relevant services, and review sensitive actions before confirming them.

The application brings course advising, schedules, scholarships, academic records, attendance, payments, and service requests into a single dashboard. It also demonstrates configurable agent-delegation controls so students can decide what a future assistant may recommend, prepare, or execute.

> **Research prototype:** All students, records, awards, dates, recommendations, and actions shown in this project are fictional and simulated. No university system, external AI model, or payment service is connected.

## Features

- Unified student dashboard with profile, notifications, search, and service navigation
- Academic advising with department filters, course search, selection, and comparison flows
- Class and examination schedules with attendance and upcoming-exam summaries
- Scholarship and waiver matching with eligibility filters and CGPA projections
- Simulated portal assistant with contextual answers and links to relevant services
- Delegation settings for recommendations, prepared actions, confirmations, and restricted activities
- Service views for course drops, semester withdrawal, grade sheets, probation, attendance, payslips, and requests
- Responsive layouts for desktop, tablet, and mobile screens

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Student dashboard and portal assistant |
| `/advising` | Course discovery and advising preferences |
| `/schedule` | Class and examination schedule |
| `/scholarships` | Scholarship eligibility and improvement projections |
| `/delegation` | Agent authority and approval settings |
| `/agent` | Phase 2 AI-agent placeholder |
| `/services/[slug]` | Simulated university service records and workflows |

Supported service slugs include `course-drop`, `semester-drop`, `grade-sheet`, `probation`, `attendance`, `payslip`, and `requests`.

## Technology

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) icons
- Feature-specific stylesheets and shared global CSS

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/MeherazChayan/My-University-Portal.git
cd My-University-Portal
npm install
```

Copy the example environment configuration:

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production server after building |
| `npm run lint` | Check the code with ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |

## Environment variables

The repository includes `.env.example` as a configuration template:

```env
DATABASE_URL="file:./dev.db"
SESSION_SECRET="replace-with-at-least-32-characters"
```

The current interface uses local fictional data, but these variables reserve configuration for later persistence and authentication work. Never commit a populated `.env` file.

## Project structure

```text
src/
├── app/
│   ├── advising/          # Course advising experience
│   ├── schedule/          # Class and examination schedules
│   ├── scholarships/      # Awards and eligibility views
│   ├── services/[slug]/   # Reusable service-detail routes
│   ├── delegation/        # Agent permission controls
│   └── page.tsx           # Main student dashboard
├── components/
│   └── PortalAssistant.tsx
└── lib/                   # Shared application utilities
```

## Safety and scope

This prototype is designed for interface and interaction research. Assistant responses are deterministic rules implemented in the client, and buttons only demonstrate proposed workflows. The project must not be used to make real academic, financial, medical, or administrative decisions.

## License

No license has been specified. All rights are reserved by the repository owner.
