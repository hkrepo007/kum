// Scheme-specific roadmap configurations

export interface RoadmapStep {
  id: number
  title: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
}

export const schemeRoadmaps: Record<string, RoadmapStep[]> = {
  // DCE Scholarship
  'DCE Scholarship': [
    {
      id: 1,
      title: 'Apply on DCE Scholarship Portal',
      description: 'Visit dcescholarship.kerala.gov.in. Register with your Aadhaar and college ID between August-September.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Upload Documents',
      description: 'Marksheets, income certificate (from Village Office), caste certificate (if applicable), bank passbook copy.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'College Principal Verification',
      description: 'Your college principal verifies enrollment, attendance, and academic records online.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'District Education Office Approval',
      description: 'DEO processes and approves within 45 days of application deadline.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Amount Credited',
      description: 'Scholarship credited directly to your bank account (DBT). Tuition portion sent to college.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Annual Renewal',
      description: 'Renew each year by submitting updated marksheet and income certificate.',
      status: 'upcoming'
    }
  ],

  // Social Security Pension
  'Social Security Pension': [
    {
      id: 1,
      title: 'Visit Local Self Government Office',
      description: 'Go to your Village/Ward Office with required documents.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Submit Application',
      description: 'Fill form and submit: Age proof, income certificate, Aadhaar, bank passbook, ration card.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Field Verification',
      description: 'Village Officer conducts field verification within 15 days.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Approval',
      description: 'Application approved by Local Self Government within 30 days.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Pension Starts',
      description: '₹1,600-2,500 monthly pension credited to bank account from next month.',
      status: 'upcoming'
    }
  ],

  // LIFE Mission Housing
  'LIFE Mission': [
    {
      id: 1,
      title: 'Survey Registration',
      description: 'Register during LIFE Mission survey period at Local Self Government.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Document Submission',
      description: 'Submit ration card, income certificate, land documents, no-property certificate.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Field Survey',
      description: 'Officials conduct field survey to verify homelessness/kutcha house status.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Beneficiary List',
      description: 'Selected beneficiaries list published by Local Self Government.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'District Approval',
      description: 'District committee approves final beneficiary list.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Fund Release',
      description: '₹4 lakh released in installments based on construction progress.',
      status: 'upcoming'
    }
  ],

  // Karunya Health Insurance
  'Karunya Benevolent Fund': [
    {
      id: 1,
      title: 'Get Treatment',
      description: 'Receive treatment at empaneled hospital for serious illness.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Hospital Claim',
      description: 'Hospital submits claim to Karunya on your behalf.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Document Verification',
      description: 'Submit medical certificates, bills, income certificate, ration card.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Medical Board Review',
      description: 'Medical board verifies treatment necessity and bills.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Approval & Payment',
      description: 'Up to ₹2 lakh approved and credited within 30 days.',
      status: 'upcoming'
    }
  ],

  // Startup Mission
  'Kerala Startup Mission': [
    {
      id: 1,
      title: 'Register on Portal',
      description: 'Visit startupmission.kerala.gov.in and create account.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Submit Business Plan',
      description: 'Upload detailed project report, financial projections, market analysis.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Document Upload',
      description: 'Educational certificates, experience proof, team details, bank information.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Pitch Presentation',
      description: 'Attend interview and present your business idea to evaluation committee.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Committee Approval',
      description: 'Evaluation committee reviews and approves funding.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Funding & Mentorship',
      description: 'Receive ₹10 lakh - ₹1 crore funding plus mentorship support.',
      status: 'upcoming'
    }
  ],

  // Old Age Pension
  'Old Age Pension': [
    {
      id: 1,
      title: 'Visit Local Self Government',
      description: 'Go to your Village/Ward Office with age proof (birth certificate/school certificate).',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Submit Application',
      description: 'Fill form with Aadhaar, income certificate, bank passbook, ration card.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Verification',
      description: 'Village Officer verifies age, income, and residence within 15 days.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Approval',
      description: 'Local Self Government approves application within 30 days.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Pension Disbursement',
      description: '₹1,600 monthly pension credited to bank account from next month.',
      status: 'upcoming'
    }
  ],

  // Kudumbashree
  'Kudumbashree': [
    {
      id: 1,
      title: 'Join Neighborhood Group',
      description: 'Contact local Kudumbashree CDS office and join a neighborhood group (NHG).',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Attend Training',
      description: 'Participate in skill development and entrepreneurship training programs.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Submit Business Proposal',
      description: 'Prepare and submit business plan for micro-enterprise or group activity.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Loan Application',
      description: 'Apply for interest subsidy loan through Kudumbashree with required documents.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Loan Approval',
      description: 'CDS and bank approve loan based on business viability.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Start Enterprise',
      description: 'Receive loan amount and start your micro-enterprise with ongoing support.',
      status: 'upcoming'
    }
  ],

  // Pre-Matric Scholarship
  'Pre-Matric Scholarship': [
    {
      id: 1,
      title: 'Register on NSP Portal',
      description: 'Visit scholarships.gov.in and register with student details.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Fill Application',
      description: 'Complete application form with academic and family details.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Upload Documents',
      description: 'Upload caste certificate, income certificate, marksheet, bank passbook, Aadhaar.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'School Verification',
      description: 'School principal verifies enrollment and attendance online.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'District Approval',
      description: 'District Social Justice Officer approves within 45 days.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Scholarship Credit',
      description: 'Scholarship amount credited to student bank account via DBT.',
      status: 'upcoming'
    }
  ],

  // Maternity Benefit
  'Maternity Benefit Scheme': [
    {
      id: 1,
      title: 'Register Pregnancy',
      description: 'Register at nearest Anganwadi or Primary Health Centre within first trimester.',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Submit Documents',
      description: 'Provide Aadhaar, bank passbook, pregnancy certificate, ration card.',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Attend Check-ups',
      description: 'Complete mandatory antenatal check-ups as per schedule.',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'First Installment',
      description: 'Receive ₹3,000 after registration and first trimester check-up.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Second Installment',
      description: 'Receive ₹2,000 after delivery and birth registration.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Third Installment',
      description: 'Receive ₹1,000 after child immunization completion.',
      status: 'upcoming'
    }
  ]
}

// Default roadmap for schemes not in the list
export const defaultRoadmap: RoadmapStep[] = [
  {
    id: 1,
    title: 'Register on Portal',
    description: 'Visit the official portal and register with your Aadhaar and basic details.',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Upload Documents',
    description: 'Upload required documents: Aadhaar, income certificate, bank passbook, and other relevant certificates.',
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Verification Process',
    description: 'Officials verify your documents and may conduct field verification. Keep your phone accessible.',
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Approval & Processing',
    description: 'Application is reviewed and processed by the department. This may take 30-45 days.',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Benefit Disbursement',
    description: 'Once approved, benefits are credited to your bank account via Direct Bank Transfer (DBT).',
    status: 'upcoming'
  }
]

// Get roadmap for a specific scheme
export function getRoadmapForScheme(schemeName: string): RoadmapStep[] {
  // Try exact match first
  if (schemeRoadmaps[schemeName]) {
    return schemeRoadmaps[schemeName]
  }

  // Try partial match
  const schemeKey = Object.keys(schemeRoadmaps).find(key => 
    schemeName.toLowerCase().includes(key.toLowerCase()) ||
    key.toLowerCase().includes(schemeName.toLowerCase())
  )

  if (schemeKey) {
    return schemeRoadmaps[schemeKey]
  }

  // Return default roadmap
  return defaultRoadmap
}

// Get portal URL for scheme
export function getPortalUrl(schemeName: string): string {
  const portalMap: Record<string, string> = {
    'DCE Scholarship': 'https://dcescholarship.kerala.gov.in/',
    'Social Security Pension': 'https://sjd.kerala.gov.in/',
    'Old Age Pension': 'https://sjd.kerala.gov.in/',
    'Widow Pension': 'https://sjd.kerala.gov.in/',
    'Disability Pension': 'https://sjd.kerala.gov.in/',
    'LIFE Mission': 'https://life.lsgkerala.gov.in/',
    'Karunya Benevolent Fund': 'https://dhs.kerala.gov.in/karunya/',
    'Karunya Health Insurance': 'https://dhs.kerala.gov.in/karunya/',
    'Kerala Startup Mission': 'https://startupmission.kerala.gov.in/',
    'Kudumbashree': 'https://kudumbashree.org/',
    'Pre-Matric Scholarship': 'https://scholarships.gov.in/',
    'Post-Matric Scholarship': 'https://scholarships.gov.in/',
    'Maternity Benefit Scheme': 'https://wcd.nic.in/',
  }

  const portalKey = Object.keys(portalMap).find(key => 
    schemeName.toLowerCase().includes(key.toLowerCase())
  )

  return portalKey ? portalMap[portalKey] : 'https://kerala.gov.in'
}
