import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = (b'\xb1\xd7\x00\xe9z2&\x8e\x83\x17|k'
              b'\xa3\x89O?<\x1ei\xca\n\xc1\xb9\x90')
SESSION_COOKIE_NAME = 'login'

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

DATABASE_FILENAME = os.path.join(
    os.path.dirname(os.path.dirname(os.path.realpath(__file__))),
    'sql', 'db.sqlite3'
)
