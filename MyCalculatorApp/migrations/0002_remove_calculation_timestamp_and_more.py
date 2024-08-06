# Generated by Django 4.2.3 on 2024-08-06 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyCalculatorApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='calculation',
            name='timestamp',
        ),
        migrations.AlterField(
            model_name='calculation',
            name='result',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
