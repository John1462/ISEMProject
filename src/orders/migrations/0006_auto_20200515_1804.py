# Generated by Django 2.2.5 on 2020-05-15 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_auto_20200515_0505'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='customer_address',
            field=models.CharField(default='', max_length=100),
        ),
    ]