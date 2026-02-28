'use client'

import { useState } from 'react'
import RegistrationForm from '@/components/RegistrationForm'
import SchemeResults from '@/components/SchemeResults'
import { UserData, SchemeResponse } from '@/types'
import { registerUser } from '@/lib/api'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<SchemeResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (userData: UserData) => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const data = await registerUser(userData)

      if (data.success) {
        setResults(data)
      } else {
        setError(data.error || 'Failed to fetch schemes')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to connect to server. Please ensure the backend is running on port 5000.')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              <span className="my">Sah</span><span className="scheme">AI</span>
            </h1>
            <p className="hero-description">
              Launched by the Kerala Government, SahAI is an AI-powered marketplace for schemes. 
              The platform is a one-stop solution for information on Government schemes and aims to deliver 
              government schemes in a seamless, convenient, cashless, paperless, faceless, time-bound, and 
              transparent manner across Government silos.
            </p>
          </div>
          <div className="hero-image">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
          </div>
        </div>
      </section>

      <main className="main-content">
        <section className="content-section">
          <h2 className="section-title">Find Your Eligible Schemes</h2>
          <div className="container">
            <p className="subtitle">Fill in your details to discover Kerala government schemes you qualify for</p>

            <RegistrationForm onSubmit={handleSubmit} loading={loading} />

            {loading && (
              <div className="loading">
                <div className="spinner"></div>
                <p>Analyzing your eligibility with AI...</p>
              </div>
            )}

            {error && (
              <div className="error">
                <strong>Error:</strong> {error}
              </div>
            )}

            {results && <SchemeResults data={results} />}
          </div>
        </section>
      </main>
    </>
  )
}
