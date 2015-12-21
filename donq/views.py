from django.http import HttpResponseRedirect, HttpResponse
from django.utils import timezone
from .models import Post
from django.contrib.auth.models import User
from .forms import PostForm,CommentForm
from .forms import SignUp
from .forms import LogIn

from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login,logout
from django.shortcuts import render,get_object_or_404, redirect,HttpResponse,HttpResponseRedirect
from passlib.hash import django_pbkdf2_sha256 as handler
from django.contrib.auth.decorators import login_required
import time
import os




# Create your views here.
@login_required
def main(request):
    posts=Post.objects.all().order_by('-created_date')
    return render(request,'donq/html/main.html',{'posts':posts})
def post_detail(request, post_id):
    post=get_object_or_404(Post,pk=post_id)
    return render(request,'donq/html/main.html',{'post':post})
def post_new(request):
    if request.method == "POST":
        form=PostForm(request.POST)
        
        if form.is_valid():
            post=form.save(commit=False)
            post.author=request.user
            post.title="test"
            post.viewer=0
            post.important=0
            post.timestamp=time.time()
            post.published_date=timezone.now()
            temp = ''
            
            if 'files' in request.FILES:
                for file in request.FILES.getlist('files'):
                    filename = file._name
                    path = '%s/%s' % ("donq/static",post.auto_increment_id)
                    if not os.path.exists(path):
                        os.makedirs(path)
                    fp = open('%s/%s/%s' % ("donq/static",post.auto_increment_id, filename) , 'wb')
                    temp+=';/%s/%s/%s' % ("static",post.auto_increment_id, filename)
                    for chunk in file.chunks():
                        fp.write(chunk)
                    fp.close()
                
            post.files=temp.lstrip(';')
        
            post.save()
            
            return HttpResponse("Your Rango account is disabled.")
    return HttpResponse("<script>alert('error');</script>");
def post_edit(request, post_id):
    post=get_object_or_404(Post,pk=post_id)
    if request.method == "POST":
        form=PostForm(request.POST, instance=post)
        if form.is_valid():
            post=form.save(commit=False)
            post.author=request.user
            post.published_date=timezone.now()
            post.save()

            return redirect('donq.views.main',post_id=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request,'donq/post_edit.html',{'form':form})
def sign_up(request):
    if request.method == "POST":
        user=SignUp(request.POST)
        if user.is_valid(): 
            post=user.save(commit=False)
            h = handler.encrypt(request.POST['password'])
            post.password=h;
            post.save()
            return redirect('donq.views.log_in')
        else :
            return HttpResponse("<script>alert(회원가입 실패);</script>");
    else:
        user = SignUp()
        
    return render(request,'donq/html/signup.html',{'form':user})
def log_in(request):

    if request.user.is_authenticated():
        return HttpResponseRedirect('main/')
    else :
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user:
                if request.POST.get("check",None)==None:
                    settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = True
                    request.session.set_expiry(0)
                else :
                    print("check");
                    settings.SESSION_EXPIRE_AT_BROWSER_CLOSE = False
                
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect('main/')
                else:
                    return HttpResponse("Your Rango account is disabled.")
            else:
                print ("Invalid login details: {0}, {1}".format(username, password))
                return render(request,'donq/html/error.html',{'error':"no pass or id"})
        else:
            loginform=LogIn()
            return render(request,'donq/html/login.html',{'form':loginform})
def post_draft_list(request):
    posts=Post.objects.filter(published_date__isnull=True).order_by('created_date')
    return render(request,'blog/post_draft_list.html',{'posts':posts})
def post_publish(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.publish()
    return redirect('blog.views.post_detail',post_id=post_id)
def post_remove(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    post.delete()
    return redirect('donq.views.main')
def mypage(request):
    posts=Post.objects.all().order_by('-created_date')
    return render(request,'donq/html/mypage.html',{'posts':posts})

def add_comment_to_post(request):
    if request.method == "POST":
        post_id=request.POST["post_id"]
        post = get_object_or_404(Post, pk=post_id)
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.post = post
            comment.save()
            return redirect('donq.views.main')
    else:
        form = CommentForm()
def clicked_like_button(request):
    if request.method == "POST":
        post_id=request.POST["post_id"]
        post = get_object_or_404(Post, pk=post_id)
        like = post.viewer

        post.viewer=like+1
        post.save()

        return redirect('donq.views.main')
    else:
        form = LikeForm(instance=post)
def page_not_found(request):

    values_for_template = {}
    return render(request,'404.html',values_for_template,status=404)

def server_error(request):

    values_for_template = {}
    return render(request,'500.html',values_for_template,status=500)
def bad_request(request):

    values_for_template = {}
    return render(request,'400.html',values_for_template,status=400)
def permission_denied(request):

    values_for_template = {}
    return render(request,'403.html',values_for_template,status=403)
def upload_pic(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            m = post=form.save(commit=False)
            m.user=request.user
            m.model_pic = form.cleaned_data['image']
            m.save()
            return HttpResponse('<script>alert("image upload success");</script>')
    return render(request,'donq/html/error.html',{'error':"allowed only via POST"})

