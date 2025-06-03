from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    
    enrollments = relationship('Enrollment', back_populates='user')

class Program(Base):
    __tablename__ = 'programs'
    
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    duration = Column(Integer)
    
    enrollments = relationship('Enrollment', back_populates='program')

class Enrollment(Base):
    __tablename__ = 'enrollments'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    program_id = Column(Integer, ForeignKey('programs.id'))
    enrollment_date = Column(String)
    
    user = relationship('User', back_populates='enrollments')
    program = relationship('Program', back_populates='enrollments')
