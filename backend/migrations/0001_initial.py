# Generated by Django 3.0.3 on 2020-06-05 20:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Livraison',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lieu_depart', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('lieu_arrive', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('date_depart', models.DateTimeField(max_length=50, null=True)),
                ('date_arrive', models.DateTimeField(max_length=50, null=True)),
                ('is_accepted', models.BooleanField(default=False, null=True)),
                ('num_tele', models.IntegerField(null=True)),
                ('ville', models.CharField(max_length=30, null=True)),
                ('bagages', models.CharField(choices=[('without Goods', 'without Goods'), ('normal Goods', 'normal Goods'), ('heavy Goods', 'heavy Goods'), ('very heavy Goods', 'very heavy Goods')], max_length=16, null=True)),
                ('comment', models.TextField(max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('ville_distination', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('service', models.CharField(choices=[('Shipper', 'livreur'), ('Request', 'bagages')], max_length=10)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Liv', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created', 'ville'),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('message', models.CharField(blank=True, max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='leads', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='annonce_ville',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lieu_depart', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('lieu_arrive', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('date_depart', models.DateTimeField(max_length=50, null=True)),
                ('date_arrive', models.DateTimeField(max_length=50, null=True)),
                ('is_accepted', models.BooleanField(default=False, null=True)),
                ('num_tele', models.IntegerField(null=True)),
                ('ville', models.CharField(max_length=30, null=True)),
                ('bagages', models.CharField(choices=[('without Goods', 'without Goods'), ('normal Goods', 'normal Goods'), ('heavy Goods', 'heavy Goods'), ('very heavy Goods', 'very heavy Goods')], max_length=16, null=True)),
                ('comment', models.TextField(max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('lieu', models.CharField(max_length=30)),
                ('distination', models.CharField(max_length=30)),
                ('num_places', models.IntegerField()),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ville', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created', 'ville'),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='annonce_offrir',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lieu_depart', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('lieu_arrive', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('date_depart', models.DateTimeField(max_length=50, null=True)),
                ('date_arrive', models.DateTimeField(max_length=50, null=True)),
                ('is_accepted', models.BooleanField(default=False, null=True)),
                ('num_tele', models.IntegerField(null=True)),
                ('ville', models.CharField(max_length=30, null=True)),
                ('bagages', models.CharField(choices=[('without Goods', 'without Goods'), ('normal Goods', 'normal Goods'), ('heavy Goods', 'heavy Goods'), ('very heavy Goods', 'very heavy Goods')], max_length=16, null=True)),
                ('comment', models.TextField(max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('ville_distination', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('num_places', models.IntegerField()),
                ('car_model', models.CharField(max_length=30)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='O_annonce', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created', 'ville'),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='annonce_demande',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lieu_depart', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('lieu_arrive', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('date_depart', models.DateTimeField(max_length=50, null=True)),
                ('date_arrive', models.DateTimeField(max_length=50, null=True)),
                ('is_accepted', models.BooleanField(default=False, null=True)),
                ('num_tele', models.IntegerField(null=True)),
                ('ville', models.CharField(max_length=30, null=True)),
                ('bagages', models.CharField(choices=[('without Goods', 'without Goods'), ('normal Goods', 'normal Goods'), ('heavy Goods', 'heavy Goods'), ('very heavy Goods', 'very heavy Goods')], max_length=16, null=True)),
                ('comment', models.TextField(max_length=200, null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('ville_distination', models.CharField(default='SOME STRING', max_length=50, null=True)),
                ('num_personnes', models.IntegerField()),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='D_annonce', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created', 'ville'),
                'abstract': False,
            },
        ),
    ]
