from django import forms
from .models import Post,CustomUser,Comment
from django.contrib.auth.models import User
class PostForm(forms.ModelForm):
    class Meta:
        model=Post
        fields =('text','spear','categori',)
class SignUp(forms.ModelForm):
    class Meta:
        model=User
        fields=('username','password','email','first_name','last_name',)
class LogIn(forms.ModelForm):
    class Meta:
        model=CustomUser
        fields=('username','password',)
class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('text',)
class LikeForm(forms.ModelForm):
    class Meta:
        model = Post
        fields =()
class ImageUploadForm(forms.Form):
    """Image upload form."""
    image = forms.ImageField()
