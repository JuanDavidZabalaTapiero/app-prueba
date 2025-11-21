from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import users as users_router

from app.core.config import settings


app = FastAPI(title="My App")

# Lista de orígenes permitidos
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],            # permite GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],            # permite cualquier header
)

# rutas
app.include_router(users_router.router, prefix=settings.API_V1_STR)