@echo off 
python manage.py startapp donq 
python manage.py makemigrations 
python manage.py migrate  
python manage.py createsuperuser  
pause 
