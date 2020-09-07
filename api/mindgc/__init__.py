import os

from fastapi import FastAPI, status
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse, PlainTextResponse
from starlette.requests import Request
from starlette.exceptions import HTTPException as StarletteHTTPException
  
from mindgc.db import database
from mindgc.users.router import router as user_router


origins = [
    os.environ["UI_BASE_URL"],
]

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Error handling
@api.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return PlainTextResponse(str(exc.detail), status_code=exc.status_code)

@api.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content=jsonable_encoder({"detail": exc.errors(), "body": exc.body}),
    )

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
