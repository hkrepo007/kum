import os
import requests
from bs4 import BeautifulSoup
import re

class SchemeAgent:
    def __init__(self):
        api_key = os.getenv('HUGGINGFACE_API_KEY')
        if not api_key:
            raise ValueError("HUGGINGFACE_API_KEY not found in environment variables. Please set it in .env file")
        
        self.api_key = api_key
        self.api_url = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2"
        self.headers = {"Authorization": f"Bearer {api_key}"}
        self.kerala_schemes_url = "https://kerala.gov.in"
    
    def scrape_kerala_schemes(self):
        """Scrape actual schemes from Kerala government website"""
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(self.kerala_schemes_url, headers=headers, timeout=15)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                schemes = []
                
                # Try to find scheme listings (adjust selectors based on actual site structure)
                scheme_elements = soup.find_all(['div', 'article', 'section'], class_=re.compile(r'scheme|card|item', re.I))
                
                for element in scheme_elements[:20]:  # Limit to 20 schemes
                    title_elem = element.find(['h2', 'h3', 'h4', 'a'])
                    desc_elem = element.find(['p', 'div'], class_=re.compile(r'desc|summary|content', re.I))
                    
                    if title_elem:
                        title = title_elem.get_text(strip=True)
                        description = desc_elem.get_text(strip=True) if desc_elem else ''
                        
                        if title and len(title) > 5:  # Valid scheme name
                            schemes.append({
                                'name': title,
                                'description': description[:200] if description else 'Kerala government scheme'
                            })
                
                return schemes if schemes else self._get_fallback_schemes()
            else:
                return self._get_fallback_schemes()
                
        except Exception as e:
            print(f"Error scraping schemes: {e}")
            return self._get_fallback_schemes()
    
    def _get_fallback_schemes(self):
        """Fallback schemes if scraping fails"""
        return [
            {'name': 'Social Security Pension', 'description': 'Monthly pension for elderly, widows, and differently-abled persons'},
            {'name': 'Educational Scholarships', 'description': 'Financial assistance for students from economically weaker sections'},
            {'name': 'LIFE Mission Housing', 'description': 'Housing scheme for homeless and those living in kutcha houses'},
            {'name': 'Karunya Benevolent Fund', 'description': 'Health insurance and medical assistance for serious illnesses'},
            {'name': 'Agricultural Subsidies', 'description': 'Financial support and subsidies for farmers'},
            {'name': 'Kerala Startup Mission', 'description': 'Funding and support for entrepreneurs and startups'},
            {'name': 'Minority Welfare Schemes', 'description': 'Educational and financial support for minority communities'},
            {'name': 'Women Empowerment Schemes', 'description': 'Support programs for women entrepreneurs and self-help groups'},
        ]
    
    def _call_huggingface_api(self, prompt, max_tokens=1000):
        """Call Hugging Face Inference API"""
        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": max_tokens,
                "temperature": 0.7,
                "top_p": 0.95,
                "return_full_text": False
            }
        }
        
        try:
            response = requests.post(self.api_url, headers=self.headers, json=payload, timeout=30)
            response.raise_for_status()
            result = response.json()
            
            if isinstance(result, list) and len(result) > 0:
                return result[0].get('generated_text', '')
            return str(result)
        except requests.exceptions.RequestException as e:
            print(f"Hugging Face API Error: {e}")
            return self._get_fallback_response(prompt)
    
    def _get_fallback_response(self, prompt):
        """Fallback response if API fails"""
        if "eligible" in prompt.lower():
            return """Based on the profile provided, here are potential Kerala government schemes:

1. Kerala State Welfare Fund Board Schemes: Financial assistance for various categories
2. Social Security Pension: For elderly, widows, and differently-abled persons
3. Educational Scholarships: For students from economically weaker sections
4. Housing Schemes: For low-income families
5. Health Insurance Schemes: Karunya Benevolent Fund and other health support programs

Please verify eligibility and details from the official Kerala government portal."""
        else:
            return """Scheme Details:
Roadmap: Implementation through district-level offices
Duration: Ongoing scheme with annual renewals
Application Process: Apply through official Kerala government portal or local offices
For accurate information, please visit the official Kerala government website."""
    
    def create_eligibility_prompt(self, user_data, available_schemes=None):
        """Generate prompt from registration data"""
        
        # If we have scraped schemes, include them in the prompt
        schemes_context = ""
        if available_schemes:
            schemes_list = "\n".join([f"- {s['name']}: {s['description']}" for s in available_schemes[:15]])
            schemes_context = f"\n\nAvailable Kerala Government Schemes:\n{schemes_list}\n"
        
        prompt = f"""You are an expert on Kerala government welfare schemes and policies.

Based on the following user profile, identify the top 5 most relevant Kerala government schemes this person is eligible for:

User Profile:
- Name: {user_data.get('name')}
- Age: {user_data.get('age')} years
- Gender: {user_data.get('gender')}
- Category: {user_data.get('category', 'Not specified')}
- Annual Income: ₹{user_data.get('income')}
- Occupation: {user_data.get('occupation', 'Not specified')}
- Education: {user_data.get('education', 'Not specified')}
- District: {user_data.get('district')}
{schemes_context}
List exactly 5 Kerala government schemes that match this profile. For each scheme provide:
1. Scheme name (use actual Kerala government scheme names)
2. Brief description (1-2 sentences)
3. Why this person is eligible

Format each scheme as:
[Number]. [Scheme Name]: [Description]
Eligibility: [Why eligible based on profile]

Respond with only the scheme list, no additional text."""
        return prompt
    
    def find_eligible_schemes(self, user_data):
        """Use AI to identify eligible schemes"""
        # First try to get real schemes from Kerala portal
        available_schemes = self.scrape_kerala_schemes()
        
        # Create prompt with available schemes
        prompt = self.create_eligibility_prompt(user_data, available_schemes)
        response = self._call_huggingface_api(prompt, max_tokens=1000)
        return response
    
    def scrape_scheme_details(self, scheme_name):
        """Fetch scheme details from Kerala government website"""
        try:
            # Search for scheme on Kerala portal
            search_url = f"https://kerala.gov.in/search?q={scheme_name.replace(' ', '+')}"
            headers = {'User-Agent': 'Mozilla/5.0'}
            response = requests.get(search_url, headers=headers, timeout=10)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Extract relevant information
                details = {
                    'scheme_name': scheme_name,
                    'roadmap': self._extract_roadmap(soup),
                    'duration': self._extract_duration(soup),
                    'application_process': self._extract_application_process(soup),
                    'source_url': search_url
                }
                return details
            else:
                return self._generate_fallback_details(scheme_name)
                
        except Exception as e:
            return self._generate_fallback_details(scheme_name)
    
    def _extract_roadmap(self, soup):
        """Extract implementation roadmap"""
        roadmap_keywords = ['roadmap', 'timeline', 'phases', 'implementation']
        for keyword in roadmap_keywords:
            element = soup.find(text=lambda t: t and keyword.lower() in t.lower())
            if element:
                return element.parent.get_text(strip=True)[:500]
        return "Roadmap details to be verified from official portal"
    
    def _extract_duration(self, soup):
        """Extract scheme duration"""
        duration_keywords = ['duration', 'period', 'validity', 'timeline']
        for keyword in duration_keywords:
            element = soup.find(text=lambda t: t and keyword.lower() in t.lower())
            if element:
                return element.parent.get_text(strip=True)[:200]
        return "Duration details available on official portal"
    
    def _extract_application_process(self, soup):
        """Extract application process steps"""
        process_keywords = ['apply', 'application', 'procedure', 'how to']
        for keyword in process_keywords:
            element = soup.find(text=lambda t: t and keyword.lower() in t.lower())
            if element:
                return element.parent.get_text(strip=True)[:500]
        return "Application process available on official portal"
    
    def _generate_fallback_details(self, scheme_name):
        """Generate AI-based details when scraping fails"""
        prompt = f"""Provide detailed information about the Kerala government scheme: {scheme_name}

Include:
1. Implementation roadmap (2-3 sentences)
2. Duration/validity period
3. Step-by-step application process (3-5 steps)

Be specific and accurate. Format clearly."""
        
        response = self._call_huggingface_api(prompt, max_tokens=500)
        
        return {
            'scheme_name': scheme_name,
            'roadmap': response[:500] if response else 'Please verify from official portal',
            'duration': 'Please verify duration from official Kerala government portal',
            'application_process': response if response else 'Visit official Kerala government portal for application process',
            'source_url': 'https://kerala.gov.in'
        }
