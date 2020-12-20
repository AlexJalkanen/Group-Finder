import flask
from flask_cors import CORS,cross_origin

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name
app.config.from_object('backend.config')

# Overlay settings read from file specified by environment variable. This is
# useful for using different on development and production machines.
# Reference: http://flask.pocoo.org/docs/config/
app.config.from_envvar('BACKEND_SETTINGS', silent=True)

# Tell our app about views and model.  This is dangerously close to a
# circular import, which is naughty, but Flask was designed that way.
# (Reference http://flask.pocoo.org/docs/patterns/packages/)  We're
# going to tell pylint and pycodestyle to ignore this coding style violation.
import backend.model  # noqa: E402  pylint: disable=wrong-import-position
import backend.api  # noqa: E402  pylint: disable=wrong-import-position

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=8000)
