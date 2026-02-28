import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SahAI - Find Your Government Schemes',
  description: 'AI-powered platform to discover Kerala government schemes you are eligible for',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="main-header">
          <div className="header-main">
            <div className="header-container">
              <div className="logo-section">
                <div className="logo-group">
                  <div className="emblem">🏛️</div>
                  <div className="logo-text">
                    <div className="app-name">SahAI</div>
                    <div className="app-tagline">Find Your Eligible Schemes</div>
                  </div>
                </div>
              </div>
              
              <nav className="main-nav">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About Us</a>
                <a href="/schemes" className="nav-link">Schemes</a>
                <a href="/ecosystem" className="nav-link">Ecosystem</a>
              </nav>
            </div>
          </div>
        </header>
        
        {children}
        
        <footer className="main-footer">
          <div className="footer-container">
            <p>© 2026 Government of Kerala. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://kerala.gov.in" target="_blank" rel="noopener noreferrer">Kerala Portal</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
