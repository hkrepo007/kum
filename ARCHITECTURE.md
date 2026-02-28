# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
│                     http://localhost:3000                    │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ HTTP Requests
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    NEXT.JS FRONTEND                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Components:                                           │ │
│  │  • RegistrationForm.tsx  (User Input)                 │ │
│  │  • SchemeResults.tsx     (Display Results)            │ │
│  │  • SchemeCard.tsx        (Scheme Details)             │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  API Layer (lib/api.ts):                              │ │
│  │  • registerUser()                                      │ │
│  │  • getSchemeDetails()                                  │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ REST API Calls
                           │ (JSON over HTTP)
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                    FLASK BACKEND                             │
│                  http://localhost:5000                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  API Endpoints (app.py):                              │ │
│  │  • POST /api/register                                  │ │
│  │  • POST /api/scheme-details                            │ │
│  │  • GET  /health                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  AI Agent (agent.py):                                  │ │
│  │  • create_eligibility_prompt()                         │ │
│  │  • find_eligible_schemes()                             │ │
│  │  • scrape_scheme_details()                             │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────┬────────────────────────┬─────────────────────┘
               │                        │
               │                        │
               ▼                        ▼
┌──────────────────────┐   ┌──────────────────────────┐
│   OPENAI GPT-4 API   │   │  KERALA GOV PORTAL       │
│                      │   │  (Web Scraping)          │
│  • Scheme Analysis   │   │                          │
│  • Eligibility Match │   │  • Scheme Details        │
│  • Detail Generation │   │  • Application Process   │
└──────────────────────┘   └──────────────────────────┘
```

## Data Flow

### 1. User Registration Flow

```
User fills form
    ↓
RegistrationForm component validates input
    ↓
Calls registerUser() from lib/api.ts
    ↓
POST request to /api/register
    ↓
Flask receives user data
    ↓
agent.find_eligible_schemes(user_data)
    ↓
Creates eligibility prompt
    ↓
Sends to OpenAI GPT-4
    ↓
GPT-4 analyzes and returns schemes
    ↓
Flask returns JSON response
    ↓
Frontend displays results in SchemeResults
```

### 2. Scheme Details Flow

```
User clicks scheme card
    ↓
SchemeCard component triggers fetchDetails()
    ↓
Calls getSchemeDetails() from lib/api.ts
    ↓
POST request to /api/scheme-details
    ↓
Flask receives scheme name
    ↓
agent.scrape_scheme_details(scheme_name)
    ↓
Attempts web scraping from Kerala portal
    ↓
If scraping fails → Falls back to GPT-4
    ↓
Returns detailed information
    ↓
Flask returns JSON response
    ↓
Frontend displays in expanded card
```

## Component Architecture

### Frontend Components

```
app/
├── layout.tsx                 # Root layout with metadata
└── page.tsx                   # Main page component
    ├── RegistrationForm       # User input form
    ├── SchemeResults          # Results container
    │   └── SchemeCard[]       # Individual scheme cards
    └── Loading/Error states   # UI feedback
```

### Backend Modules

```
backend/
├── app.py                     # Flask application
│   ├── CORS configuration
│   ├── Route handlers
│   └── Error handling
│
└── agent.py                   # AI Agent class
    ├── __init__()            # Initialize OpenAI client
    ├── create_eligibility_prompt()
    ├── find_eligible_schemes()
    ├── scrape_scheme_details()
    └── Helper methods
```

## API Contract

### Request/Response Formats

#### POST /api/register

**Request:**
```typescript
{
  name: string          // Required
  age: number          // Required
  gender: string       // Required
  income: number       // Required
  district: string     // Required
  category?: string    // Optional
  occupation?: string  // Optional
  education?: string   // Optional
}
```

**Response:**
```typescript
{
  success: boolean
  user: string
  schemes: string      // AI-generated text
}
```

#### POST /api/scheme-details

**Request:**
```typescript
{
  scheme_name: string  // Required
}
```

**Response:**
```typescript
{
  success: boolean
  details: {
    scheme_name: string
    roadmap: string
    duration: string
    application_process: string
    source_url: string
  }
}
```

## Technology Stack

### Frontend Stack
```
Next.js 14
    ├── React 18
    ├── TypeScript
    ├── CSS3
    └── Fetch API
```

### Backend Stack
```
Flask
    ├── Flask-CORS
    ├── OpenAI Python SDK
    ├── BeautifulSoup4
    ├── Requests
    └── python-dotenv
```

## Security Architecture

```
┌─────────────────────────────────────────┐
│  Environment Variables                   │
│  • OPENAI_API_KEY (backend/.env)        │
│  • NEXT_PUBLIC_API_URL (optional)       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  CORS Protection                         │
│  • Allowed origins: localhost:3000      │
│  • Allowed methods: GET, POST, OPTIONS  │
│  • Allowed headers: Content-Type        │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  Input Validation                        │
│  • Required field checks                 │
│  • Type validation                       │
│  • Error handling                        │
└─────────────────────────────────────────┘
```

## Deployment Architecture

### Development
```
Local Machine
    ├── Backend: localhost:5000
    └── Frontend: localhost:3000
```

### Production (Recommended)
```
Cloud Infrastructure
    ├── Frontend: Vercel/Netlify
    │   └── Static hosting with CDN
    │
    └── Backend: Railway/Render/Heroku
        ├── WSGI server (Gunicorn)
        ├── Environment variables
        └── HTTPS enabled
```

## Error Handling Flow

```
Error Occurs
    ↓
Backend catches exception
    ↓
Logs error to console
    ↓
Returns JSON error response
    ↓
Frontend receives error
    ↓
Displays user-friendly message
    ↓
Logs to browser console (dev mode)
```

## State Management

### Frontend State
```
page.tsx (Main State)
    ├── loading: boolean
    ├── results: SchemeResponse | null
    └── error: string | null

SchemeCard (Local State)
    ├── details: SchemeDetails | null
    ├── loading: boolean
    └── error: string | null
```

### Backend State
```
Stateless API
    ├── No session management
    ├── Each request independent
    └── OpenAI client initialized once
```

## Performance Considerations

### Frontend
- Next.js automatic code splitting
- Client-side rendering for interactivity
- Lazy loading of scheme details
- Optimized CSS with gradients

### Backend
- Async AI calls with timeout
- Web scraping with fallback
- Error handling prevents crashes
- CORS caching for preflight requests

### Optimization Opportunities
- Add Redis for scheme caching
- Implement request rate limiting
- Use CDN for static assets
- Add database for scheme storage
- Implement pagination for results

## Monitoring Points

### Frontend Metrics
- Page load time
- API response time
- Error rate
- User interactions

### Backend Metrics
- Request count
- Response time
- OpenAI API latency
- Error rate
- API cost tracking

## Scalability

### Current Limitations
- Single server instance
- No caching layer
- Synchronous processing
- No load balancing

### Scale-Up Path
1. Add Redis for caching
2. Implement queue for AI requests
3. Add load balancer
4. Use database for schemes
5. Implement CDN
6. Add monitoring/alerting

## Development Workflow

```
1. Local Development
   ├── Edit code
   ├── Hot reload (Next.js)
   └── Test manually

2. Testing
   ├── Run test-connection.py
   ├── Check browser console
   └── Verify API responses

3. Debugging
   ├── Backend: Terminal logs
   ├── Frontend: Browser DevTools
   └── Network: Browser Network tab

4. Deployment
   ├── Build frontend: npm run build
   ├── Test production build
   └── Deploy to cloud
```

This architecture provides a solid foundation for an AI-powered government schemes finder with room for future enhancements and scaling.
