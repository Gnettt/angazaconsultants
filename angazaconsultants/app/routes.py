from flask import Flask, request, jsonify
from sqlalchemy.orm import Session
from app.model import User, Program, Enrollment, Base
from app import engine  # Assuming you created an engine in your app/__init__.py or similar
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3001"])

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    username = data.get('username')
    phonenumber = data.get('phonenumber')
    password = data.get('password')

    if not username or not phonenumber or not password:
        return jsonify({'error': 'Missing fields'}), 400

    session = Session(bind=engine)

    # Check if user already exists (optional)
    existing_user = session.query(User).filter_by(username=username).first()
    if existing_user:
        session.close()
        return jsonify({'error': 'User already exists'}), 400

    new_user = User(username=username, phonenumber=phonenumber, password=password)
    session.add(new_user)
    session.commit()
    session.close()

    return jsonify({'message': 'User created successfully'}), 201

@app.route('/programs', methods=['GET'])
def get_programs():
    session = Session(bind=engine)
    programs = session.query(Program).all()
    session.close()

    result = []
    for program in programs:
        result.append({
            'id': program.id,
            'name': program.name,
            'description': program.description,
            'duration': program.duration,
        })

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
])

@api.route('/enrollments')
def get_enrollments():
    enrollments = Enrollment.query.all()
    return jsonify([{
        "id": e.id,
        "user_id": e.user_id,
        "program_id": e.program_id,
        "date": e.enrollment_date
    } for e in enrollments])

