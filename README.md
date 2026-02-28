# SahAI 

# Team Members
- GAYATHRI M NAIR
- KRISHNANUNNI H PILLAI
- AKSA THOMAS
- V A HARI KRISHNAN
- AADYA AJAYAN

SahAI is an Agentic AI–driven platform designed to autonomously guide citizens through complex government procedures and welfare schemes.SahAI functions as an intelligent multi-agent system capable of reasoning, planning, executing, and monitoring multi-step government workflows while maintaining strict human oversight for sensitive actions.

The platform integrates securely with DigiLocker to access verified documents and uses AI agents to generate personalized procedural roadmaps. It understands a citizen’s profile—such as age, income category, occupation, and location—and matches it with relevant central, state, and local government schemes.


> **🎯 NEW HERE? START WITH [START_HERE.md](START_HERE.md)**
> 
> **🚀 Quick Setup? Go to [GET_STARTED.md](GET_STARTED.md)**

## Features

- 🤖 AI-powered eligibility analysis using OpenAI GPT-4
- 🔍 Automatic scheme discovery from registration data
- 📊 Detailed scheme information (roadmap, duration, application process)
- 🌐 Web scraping from official Kerala government portal
- 💡 Modern Next.js frontend with TypeScript
- 🎨 Responsive and user-friendly interface
- 📝 Automated scheme application and form filling

## Quick Start

### Windows Users
```bash
# Run setup script
setup.bat

# Add your OpenAI API key to backend\.env
# Then start both servers:
start-backend.bat    # In one terminal
start-frontend.bat   # In another terminal
```

### Linux/Mac Users
```bash
# Run setup script
chmod +x setup.sh
./setup.sh

# Add your OpenAI API key to backend/.env
# Then start both servers:
cd backend && python app.py          # In one terminal
cd frontend-nextjs && npm run dev    # In another terminal
```

## Manual Setup Instructions

## Manual Setup Instructions

### Prerequisites
- Python 3.8 or higher
- Node.js 18 or higher
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file and add your API key:
```bash
# Copy example file
cp .env.example .env

# Edit .env and add:
OPENAI_API_KEY=sk-your-actual-key-here
```

5. Run the Flask server:
```bash
python app.py
```

Server will start at `http://localhost:5000`

### Frontend Setup (Next.js)

1. Navigate to frontend directory:
```bash
cd frontend-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Create `.env.local` for custom API URL:
```bash
cp .env.local.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Access the application at `http://localhost:3000`

## Testing the Connection

### 1. Test Backend Health
Open browser or use curl:
```bash
curl http://localhost:5000/health
```
Expected response: `{"status": "healthy", "message": "Backend is running"}`

### 2. Test Frontend
Open `http://localhost:3000` in your browser. You should see the registration form.

### 3. Test Full Flow
1. Fill in the registration form
2. Click "Find My Schemes"
3. View eligible schemes
4. Click on a scheme card to see detailed information

## Troubleshooting

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues and solutions.

**Quick checks:**
- Backend running on port 5000? Check `http://localhost:5000/health`
- Frontend running on port 3000? Check `http://localhost:3000`
- OpenAI API key set in `backend/.env`?
- Check browser console (F12) for errors
- Check backend terminal for error messages

## Usage

1. Fill in the registration form with your details:
   - Name, Age, Gender
   - Category, Income, Occupation
   - Education Level, District

2. Click "Find My Schemes"

3. View eligible schemes based on your profile

4. Click on any scheme card to see:
   - Implementation roadmap
   - Duration/validity
   - Application process
   - Official portal link

## Architecture

### AI Agent Flow
1. User submits registration form
2. Agent creates eligibility prompt from user data
3. OpenAI GPT-4 identifies relevant schemes
4. Agent scrapes Kerala government portal for details
5. Results displayed with detailed information

### Tech Stack
- **Backend**: Flask (Python)
- **AI**: OpenAI GPT-4
- **Web Scraping**: BeautifulSoup4
- **Frontend**: HTML/CSS/JavaScript
- **API**: RESTful endpoints

## API Endpoints

### POST `/api/register`
Register user and find eligible schemes

**Request:**
```json
{
  "name": "John Doe",
  "age": 25,
  "gender": "Male",
  "category": "General",
  "income": 300000,
  "occupation": "Software Engineer",
  "education": "Graduate",
  "district": "Ernakulam"
}
```

**Response:**
```json
{
  "success": true,
  "user": "John Doe",
  "schemes": "1. Scheme Name: Description..."
}
```

### POST `/api/scheme-details`
Get detailed information about a specific scheme

**Request:**
```json
{
  "scheme_name": "Kerala Startup Mission"
}
```

**Response:**
```json
{
  "success": true,
  "details": {
    "scheme_name": "Kerala Startup Mission",
    "roadmap": "Implementation details...",
    "duration": "Duration information...",
    "application_process": "Step-by-step process...",
    "source_url": "https://kerala.gov.in/..."
  }
}
```

### GET `/health`
Health check endpoint

**Response:**
```json
{
  "status": "healthy",
  "message": "Backend is running"
}
```

## Notes

- The application uses AI to identify schemes and may require verification
- Web scraping depends on Kerala government portal structure
- Always verify scheme details on official portals before applying
- API costs apply for OpenAI usage

## Documentation

- **[GET_STARTED.md](GET_STARTED.md)** - 🚀 Start here! Quick 5-minute setup
- **[QUICKSTART.md](QUICKSTART.md)** - Fast setup guide
- **[SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)** - Step-by-step verification
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and solutions
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture and data flow
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Technical overview

## Scripts

- `setup.sh` / `setup.bat` - Automated setup for Linux/Mac and Windows
- `start-backend.bat` - Quick start backend (Windows)
- `start-frontend.bat` - Quick start frontend (Windows)
- `test-connection.py` - Verify backend-frontend connectivity

## Future Enhancements

- User authentication and profile saving
- Direct application submission
- Notification system for new schemes
- Multi-language support (Malayalam)
- Mobile app version
