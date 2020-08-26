from fastapi import FastAPI
from starlette.requests import Request

from mindgc.db import database
from mindgc.users.router import router as user_router


api = FastAPI()

@api.on_event("startup")
async def startup():
    await database.connect()

@api.on_event("shutdown")
async def shutdown():
    await database.disconnect()

api.include_router(user_router)

@api.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.connection = database
    response = await call_next(request)
    return response

@api.get('/')
async def hello():
    return {"text": "hello world!"}
