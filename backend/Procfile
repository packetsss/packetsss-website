// web: gunicorn backend.wsgi --log-file -
release: python manage.py makemigrations && python manage.py migrate
web: daphne backend.asgi:application --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker channels --settings=backend.settings -v2