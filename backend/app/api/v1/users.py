from fastapi import APIRouter, status, Response, Depends

from sqlalchemy.orm import Session

from app.schemas.user import UserCreate, UserCreate as UserOut
from app.api.deps import get_db_dep
from app.crud import user as crud_user


router = APIRouter(prefix="/users", tags=["users"])

@router.post("", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def create_user_endpoint(user_in: UserCreate, response: Response, db: Session = Depends(get_db_dep)):
    created = crud_user.create_user(db, user_in)
    return created