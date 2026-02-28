import '../about-schemes.css'

export default function AboutPage() {
  return (
    <main className="main-content">
      <section className="content-section">
        <h1 className="section-title">About Kerala SchemeAI</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>🤖 What is Kerala SchemeAI?</h2>
            <p>
              Kerala SchemeAI is an innovative AI-powered platform designed to help citizens of Kerala 
              discover government schemes they are eligible for. Using advanced artificial intelligence 
              and machine learning, our platform analyzes your profile and matches you with relevant 
              government welfare schemes, subsidies, and benefits.
            </p>
          </div>

          <div className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              To bridge the gap between government schemes and beneficiaries by providing a seamless, 
              intelligent, and user-friendly platform that ensures no eligible citizen misses out on 
              government benefits they deserve.
            </p>
          </div>

          <div className="about-section">
            <h2>✨ Key Features</h2>
            <ul className="features-list">
              <li><strong>AI-Powered Matching:</strong> Advanced algorithms analyze your profile to find the most relevant schemes</li>
              <li><strong>Comprehensive Database:</strong> Access to 1000+ Kerala government schemes across all departments</li>
              <li><strong>Real-Time Updates:</strong> Schemes are dynamically fetched from official Kerala government portals</li>
              <li><strong>Step-by-Step Guidance:</strong> Visual roadmaps showing exactly how to apply for each scheme</li>
              <li><strong>Multi-Category Support:</strong> Schemes for education, health, housing, agriculture, startups, and more</li>
              <li><strong>Free to Use:</strong> Completely free service for all Kerala citizens</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>🔧 How It Works</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Fill Your Profile</h3>
                  <p>Provide basic information like age, income, education, and district</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>AI Analysis</h3>
                  <p>Our AI analyzes your profile against eligibility criteria of all schemes</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Get Matched Schemes</h3>
                  <p>Receive a personalized list of schemes you qualify for</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Apply Online</h3>
                  <p>Follow our step-by-step roadmap to apply directly on government portals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🌟 Why Choose Kerala SchemeAI?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h3>Fast & Efficient</h3>
                <p>Get results in seconds instead of hours of manual research</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Accurate Matching</h3>
                <p>AI ensures you only see schemes you're actually eligible for</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📱</div>
                <h3>Easy to Use</h3>
                <p>Simple interface designed for all age groups and tech literacy levels</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔒</div>
                <h3>Secure & Private</h3>
                <p>Your data is processed securely and never shared with third parties</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🏛️ Government Integration</h2>
            <p>
              Kerala SchemeAI works in conjunction with official Kerala government portals including:
            </p>
            <ul className="portal-list">
              <li>Kerala State Portal (kerala.gov.in)</li>
              <li>e-District Kerala</li>
              <li>Service Kerala</li>
              <li>Department-specific portals (Education, Health, Agriculture, etc.)</li>
            </ul>
            <p>
              We fetch real-time scheme information from these portals to ensure accuracy and up-to-date data.
            </p>
          </div>

          <div className="about-section">
            <h2>📊 Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Government Schemes</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">14</div>
                <div className="stat-label">Districts Covered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">AI</div>
                <div className="stat-label">Powered Matching</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Free</div>
                <div className="stat-label">For All Citizens</div>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🤝 Get Started</h2>
            <p>
              Ready to discover schemes you're eligible for? Head to our <a href="/">home page</a> and 
              fill in your details. Our AI will do the rest!
            </p>
            <div className="cta-buttons">
              <a href="/" className="cta-button primary">Find My Schemes</a>
              <a href="/schemes" className="cta-button secondary">Browse All Schemes</a>
            </div>
          </div>

          <div className="about-section">
            <h2>📞 Contact & Support</h2>
            <p>
              For queries, feedback, or support, please contact:
            </p>
            <ul className="contact-list">
              <li><strong>Kerala Call Centre:</strong> 1800-425-1550</li>
              <li><strong>Email:</strong> info@kerala.gov.in</li>
              <li><strong>Website:</strong> <a href="https://kerala.gov.in" target="_blank" rel="noopener noreferrer">kerala.gov.in</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
