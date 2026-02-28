# Documentation Index

Complete guide to all documentation files in this project.

## 🚀 Getting Started

### [GET_STARTED.md](GET_STARTED.md)
**Start here if you're new!**
- 5-minute quick setup
- Step-by-step instructions
- Visual project structure
- Common issues and fixes

### [QUICKSTART.md](QUICKSTART.md)
**Fast setup for experienced developers**
- Prerequisites checklist
- Quick setup commands
- Testing instructions
- Next steps

### [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)
**Verify your setup**
- Complete checklist format
- Prerequisites verification
- Backend setup steps
- Frontend setup steps
- Connection testing
- Troubleshooting quick links

## 📖 Main Documentation

### [README.md](README.md)
**Complete project documentation**
- Project overview
- Features list
- Detailed setup instructions
- Usage guide
- API documentation
- Architecture overview
- Tech stack details

## 🏗️ Technical Documentation

### [ARCHITECTURE.md](ARCHITECTURE.md)
**System architecture and design**
- System architecture diagram
- Data flow diagrams
- Component architecture
- API contracts
- Technology stack
- Security architecture
- Deployment architecture
- Performance considerations
- Scalability path

### [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
**Technical project overview**
- Project overview
- Architecture details
- Data flow explanation
- File structure
- Technologies used
- Configuration guide
- API specification
- Development workflow
- Deployment considerations
- Future enhancements

## 🔧 Troubleshooting

### [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
**Solutions to common problems**
- Backend issues
- Frontend issues
- CORS errors
- API connection problems
- OpenAI API errors
- Scheme details loading issues
- TypeScript errors
- Testing procedures
- Environment variables
- Quick reset instructions

## 📜 Scripts Documentation

### Setup Scripts
- **setup.sh** - Linux/Mac automated setup
- **setup.bat** - Windows automated setup

### Start Scripts
- **start-backend.bat** - Quick start backend (Windows)
- **start-frontend.bat** - Quick start frontend (Windows)

### Test Scripts
- **test-connection.py** - Verify backend-frontend connectivity
  - Tests health endpoint
  - Tests registration endpoint
  - Tests scheme details endpoint
  - Provides detailed error messages

## 📁 Component Documentation

### Frontend (Next.js)

#### [frontend-nextjs/README.md](frontend-nextjs/README.md)
**Frontend-specific documentation**
- Next.js setup
- Project structure
- Component overview
- Build instructions

#### Components
- **app/page.tsx** - Main page with state management
- **components/RegistrationForm.tsx** - User input form
- **components/SchemeResults.tsx** - Results display
- **components/SchemeCard.tsx** - Individual scheme cards
- **lib/api.ts** - API utility functions
- **types/index.ts** - TypeScript type definitions

### Backend (Flask)

#### Core Files
- **backend/app.py** - Flask API server
  - Route handlers
  - CORS configuration
  - Error handling
  
- **backend/agent.py** - AI Agent logic
  - OpenAI integration
  - Web scraping
  - Prompt generation
  - Fallback mechanisms

## 🔑 Configuration Files

### Backend Configuration
- **backend/.env.example** - Environment template
- **backend/.env** - Your API key (create this)
- **backend/requirements.txt** - Python dependencies

### Frontend Configuration
- **frontend-nextjs/.env.local.example** - Environment template
- **frontend-nextjs/.env.local** - Optional custom config
- **frontend-nextjs/package.json** - Node dependencies
- **frontend-nextjs/tsconfig.json** - TypeScript config
- **frontend-nextjs/next.config.js** - Next.js config

## 📊 Documentation by Use Case

### I want to...

#### Get started quickly
1. [GET_STARTED.md](GET_STARTED.md)
2. [QUICKSTART.md](QUICKSTART.md)

#### Understand the architecture
1. [ARCHITECTURE.md](ARCHITECTURE.md)
2. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

#### Fix a problem
1. [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)

#### Learn the API
1. [README.md](README.md) - API Endpoints section
2. [ARCHITECTURE.md](ARCHITECTURE.md) - API Contract section

#### Deploy to production
1. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Deployment section
2. [ARCHITECTURE.md](ARCHITECTURE.md) - Deployment Architecture section

#### Customize the application
1. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - File Structure section
2. [ARCHITECTURE.md](ARCHITECTURE.md) - Component Architecture section
3. Backend: Edit `backend/agent.py`
4. Frontend: Edit files in `frontend-nextjs/components/`

#### Test the setup
1. Run `python test-connection.py`
2. Check [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)
3. See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) if issues

## 📝 Documentation Standards

### File Naming
- ALL_CAPS.md for documentation files
- lowercase-with-dashes.md for guides
- README.md for directory-specific docs

### Content Structure
- Clear headings with emoji
- Code blocks with syntax highlighting
- Step-by-step instructions
- Visual diagrams where helpful
- Links to related documentation

## 🔄 Documentation Updates

When updating the project:
1. Update relevant documentation files
2. Keep code examples current
3. Update version numbers
4. Add new troubleshooting entries
5. Update architecture diagrams if needed

## 📞 Getting Help

### Documentation Not Clear?
1. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Review [GET_STARTED.md](GET_STARTED.md)
3. Check browser console (F12)
4. Check backend terminal logs

### Feature Not Documented?
1. Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
2. Review source code comments
3. Check [ARCHITECTURE.md](ARCHITECTURE.md)

## 📚 Reading Order

### For Beginners
1. [GET_STARTED.md](GET_STARTED.md)
2. [SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)
3. [README.md](README.md)
4. [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

### For Developers
1. [QUICKSTART.md](QUICKSTART.md)
2. [ARCHITECTURE.md](ARCHITECTURE.md)
3. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
4. Source code files

### For DevOps
1. [ARCHITECTURE.md](ARCHITECTURE.md) - Deployment section
2. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Deployment section
3. Configuration files
4. [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## 🎯 Quick Links

- **Setup**: [GET_STARTED.md](GET_STARTED.md)
- **Problems**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Architecture**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **API**: [README.md](README.md#api-endpoints)
- **Test**: `python test-connection.py`

---

**Last Updated**: Check git commit history
**Maintained By**: Project contributors
**Questions?** Check the documentation files above!
