'use client'

import { useState, useEffect } from 'react'
import '../about-schemes.css'
import SchemeRoadmap from '@/components/SchemeRoadmap'
import { getRoadmapForScheme, getPortalUrl } from '@/lib/schemeRoadmaps'

interface Scheme {
  name: string
  description: string
  category?: string
}

export default function SchemesPage() {
  const [allSchemes, setAllSchemes] = useState<Scheme[]>([])
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedScheme, setSelectedScheme] = useState<string | null>(null)

  // Comprehensive list of Kerala government schemes
  const comprehensiveSchemes: Scheme[] = [
    // Education Schemes
    { name: 'DCE Scholarship', description: 'Financial assistance for college students from economically weaker sections', category: 'Education' },
    { name: 'Pre-Matric Scholarship', description: 'Scholarship for SC/ST students studying in classes 1-10', category: 'Education' },
    { name: 'Post-Matric Scholarship', description: 'Financial support for SC/ST students in higher education', category: 'Education' },
    { name: 'Merit-cum-Means Scholarship', description: 'For meritorious students from low-income families', category: 'Education' },
    { name: 'Minority Scholarship', description: 'Educational assistance for minority community students', category: 'Education' },
    { name: 'Girl Child Education Scheme', description: 'Special scholarship for girl students', category: 'Education' },
    
    // Social Security
    { name: 'Old Age Pension', description: 'Monthly pension for senior citizens above 60 years', category: 'Social Security' },
    { name: 'Widow Pension', description: 'Financial assistance for widows', category: 'Social Security' },
    { name: 'Disability Pension', description: 'Monthly support for differently-abled persons', category: 'Social Security' },
    { name: 'Agricultural Worker Pension', description: 'Pension for agricultural laborers', category: 'Social Security' },
    { name: 'Unmarried Women Pension', description: 'Support for unmarried women above 50 years', category: 'Social Security' },
    
    // Housing
    { name: 'LIFE Mission', description: 'Housing scheme for homeless and kutcha house dwellers', category: 'Housing' },
    { name: 'Pradhan Mantri Awas Yojana', description: 'Central government housing scheme', category: 'Housing' },
    { name: 'Griha Nirmana Sahaya', description: 'House construction assistance', category: 'Housing' },
    { name: 'Housing Loan Subsidy', description: 'Interest subsidy on housing loans', category: 'Housing' },
    
    // Health
    { name: 'Karunya Benevolent Fund', description: 'Medical assistance for serious illnesses up to ₹2 lakh', category: 'Health' },
    { name: 'Karunya Health Insurance', description: 'Health insurance coverage for BPL families', category: 'Health' },
    { name: 'Chief Minister Relief Fund', description: 'Emergency medical assistance', category: 'Health' },
    { name: 'Free Medicine Scheme', description: 'Free medicines at government hospitals', category: 'Health' },
    { name: 'Dialysis Support Scheme', description: 'Financial support for dialysis patients', category: 'Health' },
    
    // Agriculture
    { name: 'Krishi Bhavan Services', description: 'Various agricultural support services', category: 'Agriculture' },
    { name: 'Subsidy for Farm Equipment', description: 'Financial assistance for purchasing farm equipment', category: 'Agriculture' },
    { name: 'Crop Insurance Scheme', description: 'Insurance coverage for crops', category: 'Agriculture' },
    { name: 'Organic Farming Support', description: 'Assistance for organic farming practices', category: 'Agriculture' },
    { name: 'Farmer Welfare Fund', description: 'Financial support for registered farmers', category: 'Agriculture' },
    { name: 'Soil Testing Subsidy', description: 'Free or subsidized soil testing', category: 'Agriculture' },
    
    // Employment & Entrepreneurship
    { name: 'Kerala Startup Mission', description: 'Funding and support for startups (₹10 lakh - ₹1 crore)', category: 'Employment' },
    { name: 'PMEGP Scheme', description: 'Prime Minister Employment Generation Programme', category: 'Employment' },
    { name: 'Skill Development Programs', description: 'Free skill training for youth', category: 'Employment' },
    { name: 'Self Employment Scheme', description: 'Financial assistance for self-employment', category: 'Employment' },
    { name: 'Kudumbashree', description: 'Women empowerment and entrepreneurship', category: 'Employment' },
    
    // Women & Child
    { name: 'Maternity Benefit Scheme', description: 'Financial assistance for pregnant women', category: 'Women & Child' },
    { name: 'Balasabha', description: 'Child development and welfare programs', category: 'Women & Child' },
    { name: 'Women Helpline', description: '24x7 support for women in distress', category: 'Women & Child' },
    { name: 'Nirbhaya Fund', description: 'Safety and security schemes for women', category: 'Women & Child' },
    { name: 'Anganwadi Services', description: 'Nutrition and early childhood care', category: 'Women & Child' },
    
    // Minority Welfare
    { name: 'Minority Scholarship Scheme', description: 'Educational support for minority communities', category: 'Minority Welfare' },
    { name: 'Minority Housing Scheme', description: 'Housing assistance for minorities', category: 'Minority Welfare' },
    { name: 'Minority Business Loan', description: 'Financial support for minority entrepreneurs', category: 'Minority Welfare' },
    
    // SC/ST Welfare
    { name: 'SC/ST Development Corporation', description: 'Various welfare schemes for SC/ST communities', category: 'SC/ST Welfare' },
    { name: 'SC/ST Housing Scheme', description: 'Special housing assistance', category: 'SC/ST Welfare' },
    { name: 'SC/ST Education Loan', description: 'Educational loans with subsidy', category: 'SC/ST Welfare' },
    
    // Labour Welfare
    { name: 'Labour Welfare Fund', description: 'Benefits for registered workers', category: 'Labour' },
    { name: 'Construction Worker Welfare', description: 'Schemes for construction workers', category: 'Labour' },
    { name: 'Accident Insurance', description: 'Insurance coverage for workers', category: 'Labour' },
    { name: 'Pension for Unorganized Workers', description: 'Pension scheme for unorganized sector', category: 'Labour' },
    
    // Other Schemes
    { name: 'Ration Card Services', description: 'Public distribution system benefits', category: 'Food Security' },
    { name: 'LPG Subsidy', description: 'Cooking gas subsidy for eligible families', category: 'Food Security' },
    { name: 'Legal Aid Services', description: 'Free legal assistance for poor', category: 'Legal Aid' },
    { name: 'Pension for Artists', description: 'Financial support for traditional artists', category: 'Culture' },
    { name: 'Sports Scholarship', description: 'Support for talented sports persons', category: 'Sports' },
  ]

  useEffect(() => {
    fetchAndMergeSchemes()
  }, [])

  useEffect(() => {
    filterSchemes()
  }, [searchTerm, selectedCategory, allSchemes])

  const fetchAndMergeSchemes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/schemes')
      const data = await response.json()

      if (data.success && data.schemes.length > 0) {
        const mergedSchemes = [...comprehensiveSchemes]
        
        data.schemes.forEach((backendScheme: Scheme) => {
          const exists = mergedSchemes.some(s => 
            s.name.toLowerCase() === backendScheme.name.toLowerCase()
          )
          if (!exists) {
            mergedSchemes.push({
              ...backendScheme,
              category: 'General'
            })
          }
        })
        
        setAllSchemes(mergedSchemes)
      } else {
        setAllSchemes(comprehensiveSchemes)
      }
    } catch (err) {
      setAllSchemes(comprehensiveSchemes)
    } finally {
      setLoading(false)
    }
  }

  const filterSchemes = () => {
    let filtered = allSchemes

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(scheme => scheme.category === selectedCategory)
    }

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(scheme =>
        scheme.name.toLowerCase().includes(search) ||
        scheme.description.toLowerCase().includes(search) ||
        (scheme.category && scheme.category.toLowerCase().includes(search))
      )
    }

    setFilteredSchemes(filtered)
  }

  const categories = ['all', ...Array.from(new Set(allSchemes.map(s => s.category).filter(Boolean) as string[]))]

  return (
    <main className="main-content">
      <section className="content-section">
        <h1 className="section-title">All Kerala Government Schemes</h1>
        
        <div className="schemes-header">
          <p className="schemes-description">
            Browse through {allSchemes.length}+ Kerala government schemes. Use search and filters to find specific schemes.
          </p>
          
          <div className="schemes-search">
            <input
              type="text"
              placeholder="Search by scheme name, description, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading schemes...</p>
          </div>
        )}

        {!loading && (
          <>
            <div className="schemes-count">
              <p>
                Showing <strong>{filteredSchemes.length}</strong> of <strong>{allSchemes.length}</strong> schemes
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="schemes-grid">
              {filteredSchemes.map((scheme, index) => (
                <div key={index}>
                  <div className="scheme-item">
                    <div className="scheme-number">{index + 1}</div>
                    <div className="scheme-info">
                      {scheme.category && (
                        <span className="scheme-category">{scheme.category}</span>
                      )}
                      <h3 className="scheme-name">{scheme.name}</h3>
                      <p className="scheme-desc">{scheme.description}</p>
                      <div className="scheme-actions">
                        <button
                          onClick={() => setSelectedScheme(selectedScheme === scheme.name ? null : scheme.name)}
                          className="roadmap-button"
                        >
                          {selectedScheme === scheme.name ? '✕ Hide Roadmap' : '📍 View Roadmap'}
                        </button>
                        <a 
                          href="https://kerala.gov.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="scheme-link"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {selectedScheme === scheme.name && (
                    <div className="roadmap-wrapper">
                      <SchemeRoadmap 
                        schemeName={scheme.name}
                        steps={getRoadmapForScheme(scheme.name)}
                        portalUrl={getPortalUrl(scheme.name)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredSchemes.length === 0 && (
              <div className="no-results">
                <p>No schemes found matching your search</p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }} 
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}

        <div className="schemes-footer">
          <p>
            Want personalized recommendations? <a href="/">Fill your profile</a> to get AI-powered scheme suggestions based on your eligibility.
          </p>
        </div>
      </section>
    </main>
  )
}
