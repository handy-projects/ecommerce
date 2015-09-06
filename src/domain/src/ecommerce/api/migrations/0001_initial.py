# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.TextField(max_length=100)),
                ('description', models.CharField(default=b'', max_length=100, blank=True)),
                ('sku', models.TextField(max_length=100)),
                ('category', models.TextField(max_length=100)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('enabled', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ('created',),
            },
        ),
    ]
