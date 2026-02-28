#!/usr/bin/env python3
"""
Test script to verify backend-frontend connectivity
"""

import requests
import json
import sys

API_URL = "http://localhost:5000"

def test_health():
    """Test health endpoint"""
    print("Testing health endpoint...")
    try:
        response = requests.get(f"{API_URL}/health", timeout=5)
        if response.status_code == 200:
            print("✓ Health check passed:", response.json())
            return True
        else:
            print("✗ Health check failed:", response.status_code)
            return False
    except requests.exceptions.ConnectionError:
        print("✗ Cannot connect to backend. Is it running on port 5000?")
        return False
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def test_register():
    """Test registration endpoint"""
    print("\nTesting registration endpoint...")
    
    test_data = {
        "name": "Test User",
        "age": 25,
        "gender": "Male",
        "category": "General",
        "income": 300000,
        "occupation": "Software Engineer",
        "education": "Graduate",
        "district": "Ernakulam"
    }
    
    try:
        response = requests.post(
            f"{API_URL}/api/register",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                print("✓ Registration endpoint working")
                print(f"  Found schemes for: {data.get('user')}")
                print(f"  Schemes preview: {data.get('schemes', '')[:100]}...")
                return True
            else:
                print("✗ Registration failed:", data.get('error'))
                return False
        else:
            print(f"✗ Registration failed with status {response.status_code}")
            print(f"  Response: {response.text}")
            return False
            
    except requests.exceptions.Timeout:
        print("✗ Request timed out. OpenAI API might be slow or API key invalid.")
        return False
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def test_scheme_details():
    """Test scheme details endpoint"""
    print("\nTesting scheme details endpoint...")
    
    test_data = {
        "scheme_name": "Kerala Startup Mission"
    }
    
    try:
        response = requests.post(
            f"{API_URL}/api/scheme-details",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                print("✓ Scheme details endpoint working")
                details = data.get('details', {})
                print(f"  Scheme: {details.get('scheme_name')}")
                print(f"  Has roadmap: {'Yes' if details.get('roadmap') else 'No'}")
                print(f"  Has duration: {'Yes' if details.get('duration') else 'No'}")
                return True
            else:
                print("✗ Scheme details failed:", data.get('error'))
                return False
        else:
            print(f"✗ Scheme details failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def main():
    print("=" * 60)
    print("Backend Connection Test")
    print("=" * 60)
    
    results = []
    
    # Test health
    results.append(test_health())
    
    if not results[0]:
        print("\n" + "=" * 60)
        print("Backend is not running or not accessible.")
        print("Please start the backend server:")
        print("  cd backend && python app.py")
        print("=" * 60)
        sys.exit(1)
    
    # Test registration (requires OpenAI API key)
    results.append(test_register())
    
    # Test scheme details
    results.append(test_scheme_details())
    
    # Summary
    print("\n" + "=" * 60)
    print("Test Summary")
    print("=" * 60)
    print(f"Health Check: {'✓ PASS' if results[0] else '✗ FAIL'}")
    print(f"Registration: {'✓ PASS' if results[1] else '✗ FAIL'}")
    print(f"Scheme Details: {'✓ PASS' if results[2] else '✗ FAIL'}")
    print("=" * 60)
    
    if all(results):
        print("\n✓ All tests passed! Backend is ready.")
        print("You can now start the frontend:")
        print("  cd frontend-nextjs && npm run dev")
        sys.exit(0)
    else:
        print("\n✗ Some tests failed. Check the errors above.")
        if not results[1]:
            print("\nCommon issues:")
            print("- OPENAI_API_KEY not set in backend/.env")
            print("- Invalid OpenAI API key")
            print("- OpenAI API rate limit exceeded")
        sys.exit(1)

if __name__ == "__main__":
    main()
