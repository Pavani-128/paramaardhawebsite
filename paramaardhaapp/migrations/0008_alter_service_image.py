# Generated by Django 5.1.6 on 2025-03-23 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paramaardhaapp', '0007_alter_service_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='image',
            field=models.ImageField(default='services/default.jpg', upload_to='services/'),
        ),
    ]
