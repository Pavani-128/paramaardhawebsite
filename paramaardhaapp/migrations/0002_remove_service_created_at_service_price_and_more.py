# Generated by Django 5.1.6 on 2025-03-21 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paramaardhaapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='created_at',
        ),
        migrations.AddField(
            model_name='service',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(default='services/default.png', upload_to='services/'),
        ),
    ]
