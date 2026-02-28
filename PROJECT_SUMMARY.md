# Kerala Schemes Finder - Project Summary

## Overview
An AI-powered web application that analyzes user registration data to identify eligible Kerala government schemes and fetches detailed information from official sources.

## Architecture

### Frontend (Next.js + TypeScript)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: CSS with gradient backgrounds
- **Components**:
  - `RegistrationForm`: Collects user eligibility data
  - `SchemeResults`: Displays AI-identified schemes
  - `SchemeCard`: Expandable cards with detailed scheme info
- **API Layer**: Centralized in `lib/api.ts`

### Backend (Flask + Python)
- **Framework**: Flask with CORS support
- **AI Engine**: OpenAI GPT-4 for scheme identification
- **Web Scraping**: BeautifulSoup4 for Kerala gov portal
- **Endpoints**:
  - `POST /api/register`: Find eligible schemes
  - `POST /api/scheme-details`: Get scheme details
  - `GET /health`: Health check

### AI Agent Logic
1. **Prompt Generation**: Creates eligibility prompt from user data
2. **Scheme Identification**: GPT-4 analyzes and suggests schemes
3. **Web Scraping**: Fetches details from Kerala government portal
4. **Fallback**: AI-generated details if scraping fails

## Data Flow

```
User Input (Form)
    ↓
Frontend (Next.js)
    ↓
API Request (HTTP POST)
    ↓
Backend (Flask)
    ↓
AI Agent (OpenAI GPT-4)
    ↓
Scheme Identification
    ↓
Web Scraping (Kerala Portal)
    ↓
Response with Details
    ↓
Frontend Display
```

## Key Features

### 1. Intelligent Eligibility Analysis
- Considers age, income, gender, category, education, occupation, district
- AI-powered matching with government schemes
- Personalized recommendations

### 2. Detailed Scheme Information
- Implementation roadmap
- Duration and validity
- Step-by-step application process
- Official portal links

### 3. User Experience
- Clean, modern interface
- Real-time loading states
- Error handling and feedback
- Click-to-expand scheme details
- Responsive design

### 4. Technical Excellence
- Type-safe TypeScript frontend
- RESTful API design
- CORS-enabled for local development
- Environment variable configuration
- Comprehensive error handling

## File Structure

```
kerala-schemes-finder/
├── backend/
│   ├── app.py                    # Flask API server
│   ├── agent.py                  # AI agent logic
│   ├── requirements.txt          # Python dependencies
│   ├── .env.example              # Environment template
│   └── .env                      # Your API key (create this)
│
├── frontend-nextjs/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── RegistrationForm.tsx # User input form
│   │   ├── SchemeResults.tsx    # Results display
│   │   └── SchemeCard.tsx       # Scheme card component
│   ├── lib/
│   │   └── api.ts               # API utilities
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── package.json             # Node dependencies
│   ├── tsconfig.json            # TypeScript config
│   └── next.config.js           # Next.js config
│
├── frontend/                     # Alternative vanilla HTML version
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── setup.sh                      # Linux/Mac setup script
├── setup.bat                     # Windows setup script
├── start-backend.bat             # Windows backend starter
├── start-frontend.bat            # Windows frontend starter
├── test-connection.py            # Connection test script
├── README.md                     # Main documentation
├── QUICKSTART.md                 # Quick start guide
├── TROUBLESHOOTING.md            # Troubleshooting guide
└── PROJECT_SUMMARY.md            # This file
```

## Technologies Used

### Backend
- **Python 3.8+**: Core language
- **Flask**: Web framework
- **Flask-CORS**: Cross-origin support
- **OpenAI API**: GPT-4 for AI analysis
- **BeautifulSoup4**: Web scraping
- **Requests**: HTTP client
- **python-dotenv**: Environment variables

### Frontend
- **Next.js 14**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **CSS3**: Styling with gradients
- **Fetch API**: HTTP requests

## Configuration

### Environment Variables

**Backend (.env)**
```
OPENAI_API_KEY=sk-your-key-here
```

**Frontend (.env.local)** - Optional
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## API Specification

### POST /api/register
**Purpose**: Analyze user profile and identify eligible schemes

**Request Body**:
```typescript
{
  name: string
  age: number
  gender: string
  category?: string
  income: number
  occupation?: string
  education?: string
  district: string
}
```

**Response**:
```typescript
{
  success: boolean
  user: string
  schemes: string  // AI-generated list
}
```

### POST /api/scheme-details
**Purpose**: Fetch detailed information about a specific scheme

**Request Body**:
```typescript
{
  scheme_name: string
}
```

**Response**:
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

## Development Workflow

1. **Setup**: Run setup script or manual installation
2. **Configure**: Add OpenAI API key to `.env`
3. **Develop**: 
   - Backend: Modify `agent.py` for AI logic
   - Frontend: Edit components in `components/`
4. **Test**: Run `test-connection.py`
5. **Debug**: Check browser console and backend logs

## Deployment Considerations

### Backend
- Use production WSGI server (Gunicorn)
- Set environment variables securely
- Configure CORS for production domain
- Monitor OpenAI API usage and costs
- Implement rate limiting

### Frontend
- Build: `npm run build`
- Deploy to Vercel, Netlify, or similar
- Update `NEXT_PUBLIC_API_URL` to production backend
- Enable production optimizations

## Future Enhancements

1. **User Authentication**: Save user profiles
2. **Application Tracking**: Track scheme applications
3. **Notifications**: Alert users about new schemes
4. **Multi-language**: Add Malayalam support
5. **Mobile App**: React Native version
6. **Database**: Store schemes for faster access
7. **Admin Panel**: Manage schemes manually
8. **Analytics**: Track popular schemes
9. **PDF Generation**: Download scheme details
10. **Direct Application**: Submit applications through the app

## Security Considerations

- API keys stored in environment variables
- CORS configured for specific origins
- Input validation on backend
- No sensitive data in frontend code
- HTTPS recommended for production
- Rate limiting for API endpoints

## Performance

- Frontend: Fast initial load with Next.js
- Backend: Async AI calls with timeout handling
- Caching: Consider Redis for scheme details
- CDN: Use for static assets in production

## Maintenance

- Update dependencies regularly
- Monitor OpenAI API changes
- Check Kerala portal structure changes
- Review and update scheme information
- Monitor error logs and user feedback

## Support

- **Documentation**: README.md, QUICKSTART.md, TROUBLESHOOTING.md
- **Testing**: test-connection.py for verification
- **Scripts**: Automated setup and start scripts
- **Type Safety**: TypeScript prevents common errors

## License

This project is for educational and demonstration purposes. Ensure compliance with:
- OpenAI API terms of service
- Kerala government portal terms of use
- Web scraping best practices and robots.txt

## Credits

Built with modern web technologies to help citizens discover government schemes efficiently.
