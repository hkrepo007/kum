import '../about-schemes.css'

export default function EcosystemPage() {
  return (
    <main className="main-content">
      <section className="content-section">
        <h1 className="section-title">Kerala Digital Ecosystem</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>🌐 Digital Kerala Initiative</h2>
            <p>
              SahAI is part of the larger Digital Kerala ecosystem, aimed at bringing 
              government services closer to citizens through technology and innovation.
            </p>
          </div>

          <div className="about-section">
            <h2>🔗 Connected Portals</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🏛️</div>
                <h3>Kerala Portal</h3>
                <p>Main government portal</p>
                <a href="https://kerala.gov.in" target="_blank" rel="noopener noreferrer" className="scheme-link">
                  Visit →
                </a>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📄</div>
                <h3>e-District</h3>
                <p>Online certificates & services</p>
                <a href="https://edistrict.kerala.gov.in" target="_blank" rel="noopener noreferrer" className="scheme-link">
                  Visit →
                </a>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎓</div>
                <h3>Education Portal</h3>
                <p>Scholarships & education</p>
                <a href="https://education.kerala.gov.in" target="_blank" rel="noopener noreferrer" className="scheme-link">
                  Visit →
                </a>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏥</div>
                <h3>Health Services</h3>
                <p>Health schemes & insurance</p>
                <a href="https://dhs.kerala.gov.in" target="_blank" rel="noopener noreferrer" className="scheme-link">
                  Visit →
                </a>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🚀 Technology Stack</h2>
            <p>SahAI is built using modern technologies:</p>
            <ul className="features-list">
              <li><strong>Artificial Intelligence:</strong> Hugging Face Mistral-7B for intelligent scheme matching</li>
              <li><strong>Web Scraping:</strong> Real-time data from Kerala government portals</li>
              <li><strong>Modern Frontend:</strong> Next.js and React for fast, responsive interface</li>
              <li><strong>Secure Backend:</strong> Flask API with data validation and security</li>
              <li><strong>Cloud Infrastructure:</strong> Scalable and reliable hosting</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>🤝 Partnerships</h2>
            <p>
              We work closely with various Kerala government departments to ensure accurate and 
              up-to-date information:
            </p>
            <ul className="portal-list">
              <li>Department of Electronics & IT</li>
              <li>Social Justice Department</li>
              <li>Education Department</li>
              <li>Health & Family Welfare</li>
              <li>Agriculture Department</li>
              <li>Local Self Government Department</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>📱 Future Roadmap</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Mobile App</h3>
                  <p>Native Android and iOS apps for easier access</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Malayalam Support</h3>
                  <p>Full interface in Malayalam language</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Direct Application</h3>
                  <p>Apply for schemes directly through our platform</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Status Tracking</h3>
                  <p>Track your application status in real-time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🎯 Join the Ecosystem</h2>
            <p>
              Be part of Kerala's digital transformation. Start discovering schemes you're eligible for today!
            </p>
            <div className="cta-buttons">
              <a href="/" className="cta-button primary">Find My Schemes</a>
              <a href="/about" className="cta-button secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
