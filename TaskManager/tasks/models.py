from django.db import models
from django.conf import settings

# Create your models here.

class Task(models.Model):

    class Status(models.TextChoices):
        TODO="todo", "To Do"
        IN_PROGRESS="in_progress", "In Progress"
        DONE="done", "Done"
    
    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="tasks")
    title=models.CharField(max_length=100)
    description=models.TextField(blank=True)
    status=models.CharField(max_length=20, choices=Status.choices, default=Status.TODO)
    deadline=models.DateTimeField(null=True, blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title