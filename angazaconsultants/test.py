from app import User, Program, Application, session

# Create a new user
new_user = User(name="Jane Doe", email="jane@example.com")
session.add(new_user)
session.commit()

# Fetch and print users
users = session.query(User).all()
for user in users:
    print(user)

