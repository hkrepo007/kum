'use client'

import { useState } from 'react'
import { SchemeResponse } from '@/types'
import SchemeCard from './SchemeCard'

interface SchemeResultsProps {
  data: SchemeResponse
}

interface ParsedScheme {
  name: string
  description: string
}

export default function SchemeResults({ data }: SchemeResultsProps) {
  const schemes = parseSchemes(data.schemes)

  return (
    <div className="results">
      <h2>Hello {data.user}!</h2>
      <p>Based on your profile, here are the schemes you may be eligible for:</p>
      <div>
        {schemes.length > 0 ? (
          schemes.map((scheme, index) => (
            <SchemeCard key={index} scheme={scheme} />
          ))
        ) : (
          <p>No schemes found. Please try again with different information.</p>
        )}
      </div>
    </div>
  )
}

function parseSchemes(schemesText: string): ParsedScheme[] {
  const schemes: ParsedScheme[] = []
  const lines = schemesText.split('\n')
  
  let currentScheme: ParsedScheme | null = null
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Check if line starts with a number (e.g., "1.", "2.")
    if (/^\d+\./.test(trimmedLine)) {
      // Save previous scheme if exists
      if (currentScheme) {
        schemes.push(currentScheme)
      }
      
      // Extract scheme name and description
      const content = trimmedLine.replace(/^\d+\.\s*/, '')
      const parts = content.split(':')
      
      currentScheme = {
        name: parts[0].trim(),
        description: parts.slice(1).join(':').trim() || '',
      }
    } else if (trimmedLine && currentScheme) {
      // Add to description
      currentScheme.description += ' ' + trimmedLine
    }
  }
  
  // Add last scheme
  if (currentScheme) {
    schemes.push(currentScheme)
  }
  
  return schemes
}
