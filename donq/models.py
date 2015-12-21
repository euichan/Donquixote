from django.db import models
from django.utils import timezone
import time
from django.contrib.auth.models import User
class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    viewer=models.IntegerField(default=0)
    spear=models.IntegerField()
    
    created_date = models.DateTimeField(auto_now_add=True)
    published_date = models.DateTimeField(blank=True, null=True)
    popular = models.IntegerField(default=0)
    trust = models.IntegerField(default=0)
    timestamp = models.TextField(default=time.time())
    files  = models.TextField()
    categori = models.TextField()
    def publish(self):
        self.published_date = timezone.now()
        self.timestamp = time.time()
        self.save()
    def __str__(self):
        return self.title
    def number():
        no = Post.objects.count()
        temp = Post.objects.all()[no-1].auto_increment_id
        if no == None:
            return 1
        else:
            return temp + 1
    def get_files(self):
        return self.files.split(';')
    auto_increment_id = models.IntegerField(primary_key=True,unique=True,default=number)
class CustomUser(models.Model):
   
    username = models.TextField()
    password = models.TextField()
    email = models.TextField()
    name = models.TextField()
    check = models.BooleanField()
class Comment(models.Model):
    post = models.ForeignKey('donq.Post',related_name='comments')
    author = models.ForeignKey('auth.User')
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment=models.BooleanField(default=False)
    def approve(self):
        self.approved_comment = True
        self.save()
    def __str__(self):
        return self.text
def get_image_path(instance, filename):
    return os.path.join('photos', str(instance.id), filename)
class UserProfile(models.Model):
    user = models.ForeignKey('auth.User')
    profile_image = models.ImageField(upload_to='static/profile/',default = 'static/img/profile.png')
    
