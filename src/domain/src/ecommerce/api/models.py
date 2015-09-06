from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.TextField(max_length=100)
    description = models.CharField(max_length=100, blank=True, default='')
    sku = models.TextField(max_length=100)
    category = models.TextField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    enabled = models.BooleanField(default=False)
    class Meta:
        ordering = ('created',)
