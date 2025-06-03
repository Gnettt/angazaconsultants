from app import create_app
from app.models import db, User, Program, Enrollment

app = create_app()
with app.app_context():
    db.drop_all()
    db.create_all()

    u1 = User(username="alice", email="alice@example.com", password="1234")
    u2 = User(username="bob", email="bob@example.com", password="abcd")

    p1 = Program(name="Web Dev", description="Learn to code", duration=6)
    p2 = Program(name="Data Science", description="Analyze data", duration=8)

    db.session.add_all([u1, u2, p1, p2])
    db.session.commit()

    e1 = Enrollment(user_id=u1.id, program_id=p1.id, enrollment_date="2025-06-02")
    e2 = Enrollment(user_id=u2.id, program_id=p2.id, enrollment_date="2025-06-02")

    db.session.add_all([e1, e2])
    db.session.commit()
