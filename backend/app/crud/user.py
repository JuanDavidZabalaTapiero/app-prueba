from sqlalchemy.orm import Session
from app.models.user import User as UserModel
from app.schemas.user import UserCreate

def create_user(db: Session, user_in: UserCreate) -> UserModel:
    db_user = UserModel(name=user_in.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user