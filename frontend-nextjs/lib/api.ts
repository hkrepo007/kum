const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export async function registerUser(userData: any) {
  const response = await fetch(`${API_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export async function getSchemeDetails(schemeName: string) {
  const response = await fetch(`${API_URL}/api/scheme-details`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ scheme_name: schemeName }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export async function checkHealth() {
  const response = await fetch(`${API_URL}/health`)
  return response.json()
}
