import hashlib
from typing import List

from fastapi import APIRouter, Depends, HTTPException

from starlette.requests import Request
from databases import Database
from sqlalchemy import or_

from mindgc.utils.dbutils import get_connection

from .models import users
from users.models import users
from .schemas import UserCreate, UserUpdate, UserSelect
router = APIRouter()

# 入力したパスワード（平文）をハッシュ化して返します。
def get_users_insert_dict(user):
    pwhash=hashlib.sha256(user.password.encode('utf-8')).hexdigest()
    values=user.dict()
    values.pop("password")
    values["hashed_password"]=pwhash
    return values

# usersを全件検索して「UserSelect」のリストをjsonにして返します。
@router.get("/users/", response_model=List[UserSelect])
async def users_findall(request: Request, database: Database = Depends(get_connection)):
    query = users.select()
    return await database.fetch_all(query)

# usersをidで検索して「UserSelect」をjsonにして返します。
@router.get("/users/find", response_model=UserSelect)
async def users_findone(id: int, database: Database = Depends(get_connection)):
    query = users.select().where(users.columns.id==id)
    return await database.fetch_one(query)

@router.post("/auth/signin", response_model=UserSelect)
async def signin(auth_signin: AuthSignin, database: Database = Depends(get_connection)):
    # validatorは省略
    query = users.select().where(users.columns.username==user.username)
    existing = await database.fetch_one(query)
    if existing:
        raise HTTPException(status_code=409, detail="Username already exists")
    query = users.select().where(users.columns.email==user.email)
    existing = await database.fetch_one(query)
    if existing:
        raise HTTPException(status_code=409, detail="Email already exists")

    query = users.insert()
    values = get_users_insert_dict(user)
    ret = await database.execute(query, values)
    return {**user.dict()}
