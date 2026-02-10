from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: str | None = None


class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=256)


class UserLogin(BaseModel):
    username: str
    password: str = Field(min_length=8, max_length=256)


class UserUpdate(BaseModel):
    email: EmailStr | None = None
    full_name: str | None = None
    password: str | None = None


class User(UserBase):
    id: int
    is_active: bool
    is_superuser: bool
    role: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
