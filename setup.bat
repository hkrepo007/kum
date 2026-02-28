@echo off
echo === Kerala Schemes Finder Setup ===
echo.

REM Backend setup
echo Setting up Backend...
cd backend

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed
    exit /b 1
)

REM Create virtual environment
echo Creating virtual environment...
python -m venv venv

REM Activate virtual environment
call venv\Scripts\activate.bat

REM Install dependencies
echo Installing Python dependencies...
pip install -r requirements.txt

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo.
    echo WARNING: Please add your OpenAI API key to backend\.env
    echo.
)

cd ..

REM Frontend setup
echo.
echo Setting up Frontend (Next.js)...
cd frontend-nextjs

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed
    exit /b 1
)

REM Install dependencies
echo Installing Node.js dependencies...
call npm install

REM Create .env.local if it doesn't exist
if not exist .env.local (
    echo Creating .env.local file...
    copy .env.local.example .env.local
)

cd ..

echo.
echo === Setup Complete! ===
echo.
echo Next steps:
echo 1. Add your OpenAI API key to backend\.env
echo 2. Start the backend: cd backend ^&^& python app.py
echo 3. Start the frontend: cd frontend-nextjs ^&^& npm run dev
echo 4. Open http://localhost:3000 in your browser
