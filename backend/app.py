from flask import Flask, request, jsonify
from flask_cors import CORS
from agent import SchemeAgent
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Configure CORS properly
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

agent = SchemeAgent()

@app.route('/api/register', methods=['POST'])
def register_and_find_schemes():
    """Handle registration and find eligible schemes"""
    try:
        user_data = request.json
        
        if not user_data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
        
        # Validate required fields
        required_fields = ['name', 'age', 'gender', 'income', 'district']
        missing_fields = [field for field in required_fields if field not in user_data or not user_data[field]]
        
        if missing_fields:
            return jsonify({
                'success': False,
                'error': f'Missing required fields: {", ".join(missing_fields)}'
            }), 400
        
        # Find eligible schemes using AI
        eligible_schemes = agent.find_eligible_schemes(user_data)
        
        return jsonify({
            'success': True,
            'user': user_data['name'],
            'schemes': eligible_schemes
        }), 200
    
    except Exception as e:
        print(f"Error in register_and_find_schemes: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/scheme-details', methods=['POST'])
def get_scheme_details():
    """Fetch detailed information about a specific scheme"""
    try:
        data = request.json
        
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
        
        scheme_name = data.get('scheme_name')
        
        if not scheme_name:
            return jsonify({'success': False, 'error': 'Scheme name is required'}), 400
        
        # Scrape and fetch scheme details
        details = agent.scrape_scheme_details(scheme_name)
        
        return jsonify({
            'success': True,
            'details': details
        }), 200
    
    except Exception as e:
        print(f"Error in get_scheme_details: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/schemes', methods=['GET'])
def get_available_schemes():
    """Fetch available schemes from Kerala portal"""
    try:
        schemes = agent.scrape_kerala_schemes()
        
        return jsonify({
            'success': True,
            'schemes': schemes,
            'count': len(schemes)
        }), 200
    
    except Exception as e:
        print(f"Error in get_available_schemes: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Backend is running'}), 200

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    print("Make sure OPENAI_API_KEY is set in .env file")
    app.run(debug=True, port=5000, host='0.0.0.0')
