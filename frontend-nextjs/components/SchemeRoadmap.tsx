'use client'

import { useState } from 'react'

interface RoadmapStep {
  id: number
  title: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
}

interface SchemeRoadmapProps {
  schemeName: string
  steps: RoadmapStep[]
  portalUrl?: string
}

export default function SchemeRoadmap({ schemeName, steps, portalUrl }: SchemeRoadmapProps) {
  const [showDetails, setShowDetails] = useState(true)

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <div className="scheme-badge">
          <span className="checkmark">✓</span>
          <span>Kerala State domicile</span>
        </div>
        <h2 className="roadmap-title">APPLICATION ROADMAP</h2>
      </div>

      {showDetails && (
        <div className="roadmap-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className="timeline-item">
              <div className="timeline-marker">
                <div className={`marker-dot ${step.status}`}></div>
                {index < steps.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="step-badge">STEP {step.id}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="roadmap-footer">
        {portalUrl && (
          <a 
            href={portalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="apply-button"
          >
            → Apply on Official Portal
          </a>
        )}
        
        <a 
          href="https://kerala.gov.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="browse-schemes-link"
        >
          Browse All Schemes →
        </a>
        
        <button 
          className="toggle-details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? '▼ Hide Details' : '▶ Show Details'}
        </button>
      </div>

      <style jsx>{`
        .roadmap-container {
          background: linear-gradient(135deg, #0a3d2e 0%, #1a5c47 100%);
          border-radius: 12px;
          padding: 30px;
          margin: 20px 0;
          color: #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .roadmap-header {
          margin-bottom: 30px;
        }

        .scheme-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .checkmark {
          color: #4ade80;
          font-weight: bold;
        }

        .roadmap-title {
          font-size: 16px;
          letter-spacing: 2px;
          color: #fbbf24;
          font-weight: 600;
          margin: 0;
        }

        .roadmap-timeline {
          margin: 30px 0;
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          position: relative;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fbbf24;
          border: 3px solid #0a3d2e;
          box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.3);
          z-index: 2;
        }

        .marker-dot.completed {
          background: #4ade80;
          box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.3);
        }

        .marker-dot.upcoming {
          background: #64748b;
          box-shadow: 0 0 0 4px rgba(100, 116, 139, 0.3);
        }

        .marker-line {
          width: 2px;
          height: 60px;
          background: linear-gradient(180deg, #fbbf24 0%, rgba(251, 191, 36, 0.3) 100%);
          margin-top: 4px;
        }

        .timeline-content {
          flex: 1;
          padding-bottom: 10px;
        }

        .step-badge {
          display: inline-block;
          background: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          margin: 8px 0;
          color: #fff;
        }

        .step-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        .roadmap-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .apply-button {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #0a3d2e;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .apply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
          border-color: #fbbf24;
        }

        .toggle-details {
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .toggle-details:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .roadmap-container {
            padding: 20px;
          }

          .roadmap-footer {
            flex-direction: column;
            gap: 15px;
          }

          .apply-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
