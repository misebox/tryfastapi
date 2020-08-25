import databases
import sqlalchemy

DATABASE = 'postgresql'
USER = 'root'
PASSWORD = 'root'
HOST = 'db'
PORT = '5432'
DB_NAME = 'mindgc'

DATABASE_URL = '{}://{}:{}@{}:{}/{}'.format(DATABASE, USER, PASSWORD, HOST, PORT, DB_NAME)

# databases
database = databases.Database(DATABASE_URL, min_size=5, max_size=20)

ECHO_LOG = False

engine = sqlalchemy.create_engine(DATABASE_URL, echo=ECHO_LOG)

metadata = sqlalchemy.MetaData()