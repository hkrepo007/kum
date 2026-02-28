'use client'

import { useState } from 'react'
import { SchemeDetails } from '@/types'
import { getSchemeDetails } from '@/lib/api'
import { getRoadmapForScheme, getPortalUrl } from '@/lib/schemeRoadmaps'
import SchemeRoadmap from './SchemeRoadmap'

interface SchemeCardProps {
  scheme: {
    name: string
    description: string
  }
}

export default function SchemeCard({ scheme }: SchemeCardProps) {
  const [details, setDetails] = useState<SchemeDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showRoadmap, setShowRoadmap] = useState(false)

  const fetchDetails = async () => {
    if (details) {
      setShowRoadmap(!showRoadmap)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const data = await getSchemeDetails(scheme.name)

      if (data.success) {
        setDetails(data.details)
        setShowRoadmap(true)
      } else {
        setError('Failed to load details')
      }
    } catch (err: any) {
      setError(err.message || 'Error loading details')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="scheme-card" onClick={fetchDetails}>
      <h3>{scheme.name}</h3>
      <p>{scheme.description}</p>
      
      {!details && !loading && (
        <small className="click-hint">Click for detailed information & application roadmap</small>
      )}

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Fetching details...</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {details && showRoadmap && (
        <>
          <SchemeRoadmap 
            schemeName={scheme.name}
            steps={getRoadmapForScheme(scheme.name)}
            portalUrl={getPortalUrl(scheme.name)}
          />
          
          <div className="scheme-details">
            <div className="detail-section">
              <h4>📋 Implementation Details</h4>
              <p>{details.roadmap}</p>
            </div>
            <div className="detail-section">
              <h4>⏱️ Duration & Timeline</h4>
              <p>{details.duration}</p>
            </div>
            <div className="detail-section">
              <h4>📝 Additional Information</h4>
              <p>{details.application_process}</p>
            </div>
            <div className="detail-section">
              <h4>🔗 Official Resources</h4>
              <p>
                <a href={details.source_url} target="_blank" rel="noopener noreferrer">
                  Visit Official Portal →
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
