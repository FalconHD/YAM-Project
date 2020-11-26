# Generated by Django 3.0.3 on 2020-06-05 20:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import user_profile.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='reclamation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reclamation', models.TextField()),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='user_profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=10)),
                ('last_name', models.CharField(max_length=10)),
                ('Nation', models.CharField(max_length=10)),
                ('City', models.CharField(max_length=10)),
                ('Description', models.CharField(max_length=200)),
                ('image_profile', models.ImageField(blank=True, upload_to='static_server/media/images')),
                ('Cover', models.ImageField(blank=True, upload_to='static_server/media/images')),
                ('CIN', models.CharField(max_length=10, validators=[user_profile.models.validate_cin])),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('last_login', models.DateTimeField(auto_now=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='prof', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('CIN',)},
            },
        ),
    ]
