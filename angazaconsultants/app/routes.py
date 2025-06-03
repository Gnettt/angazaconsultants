from flask import Blueprint, jsonify, request
from .models import db, User, Program, Enrollment

api = Blueprint('api', __name__)

@api.route('/users')
def get_users():
    users = User.query.all()
    return jsonify([{
        "id": u.id,
        "username": u.username,
        "email": u.email
    } for u in users])

@api.route('/programs')
def get_programs():
    programs = Program.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "description": p.description,
        "duration": p.duration
    } for p in programs])

@api.route('/enrollments')
def get_enrollments():
    enrollments = Enrollment.query.all()
    return jsonify([{
        "id": e.id,
        "user_id": e.user_id,
        "program_id": e.program_id,
        "date": e.enrollment_date
    } for e in enrollments])

