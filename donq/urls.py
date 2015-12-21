"""firstproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url, patterns
from . import views
from django.conf.urls import handler400, handler403, handler404, handler500
handler400 = views.bad_request
handler403 = views.permission_denied
handler404 = views.page_not_found
handler500 = views.server_error

urlpatterns = [
    url(r'^main/$',views.main,name='main'),
    url(r'^post/(?P<post_id>[0-9]+)/$',views.post_detail,name='post_detail'),
    url(r'^post/(?P<post_id>[0-9]+)/edit$',views.post_edit,name='post_edit'),
    url(r'^post/new/$',views.post_new,name='post_new'),
    url(r'^signup/$',views.sign_up,name='sign_up'),
    url(r'^$',views.log_in,name='log_in'),
    url(r'^logout/$','django.contrib.auth.views.logout',{'next_page': '/'}),
    url(r'^post/(?P<post_id>[0-9]+)/remove/$',views.post_remove, name='post_remove'),
    url(r'^mypage/$',views.mypage,name='mypage'),
    url(r'^post/comment/$', views.add_comment_to_post, name='add_comment_to_post'),
    url(r'^clicked/like$',views.clicked_like_button,name='clicked_like_button'),
]
