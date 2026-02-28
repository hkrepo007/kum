# Kerala Schemes Finder - Next.js Frontend

Modern Next.js frontend for the Kerala Government Schemes Eligibility Finder.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 TypeScript for type safety
- 🎯 Component-based architecture
- 📱 Responsive design
- 🔄 Real-time scheme details fetching

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
frontend-nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── RegistrationForm.tsx    # User registration form
│   ├── SchemeResults.tsx       # Results display
│   └── SchemeCard.tsx          # Individual scheme card
├── types/
│   └── index.ts            # TypeScript types
└── package.json
```

## Components

### RegistrationForm
Handles user input for eligibility criteria including name, age, gender, income, district, etc.

### SchemeResults
Displays the list of eligible schemes returned by the AI agent.

### SchemeCard
Individual scheme card with click-to-expand functionality for detailed information.

## Build for Production

```bash
npm run build
npm start
```

## Requirements

- Node.js 18+
- Backend API running on port 5000

## Notes

- Ensure the Flask backend is running before starting the frontend
- The app uses client-side rendering for interactive features
- API calls are made directly to the backend (CORS enabled)
