# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import donq.models
from django.conf import settings
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('text', models.TextField()),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('approved_comment', models.BooleanField(default=False)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('username', models.TextField()),
                ('password', models.TextField()),
                ('email', models.TextField()),
                ('name', models.TextField()),
                ('check', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('title', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('viewer', models.IntegerField(default=0)),
                ('spear', models.IntegerField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('published_date', models.DateTimeField(null=True, blank=True)),
                ('popular', models.IntegerField(default=0)),
                ('trust', models.IntegerField(default=0)),
                ('timestamp', models.TextField(default=1446449092.094295)),
                ('files', models.TextField()),
                ('categori', models.TextField()),
                ('auto_increment_id', models.IntegerField(serialize=False, primary_key=True, unique=True, default=donq.models.Post.number)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('profile_image', models.ImageField(upload_to=donq.models.get_image_path, null=True, blank=True)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(to='donq.Post', related_name='comments'),
        ),
    ]
