from pydantic import BaseModel, constr

class UserCreate(BaseModel):
    name: constr(strip_whitespace=True, min_length=1, max_length=50)

class User(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True