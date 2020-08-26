import databases
import sqlalchemy
import os


DATABASE_URL = os.environ['DB_URL']

# databases
database = databases.Database(DATABASE_URL, min_size=5, max_size=20)

ECHO_LOG = False

engine = sqlalchemy.create_engine(DATABASE_URL, echo=ECHO_LOG)

metadata = sqlalchemy.MetaData()
