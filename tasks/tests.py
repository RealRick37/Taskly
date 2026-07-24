from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework import status
from tasks.models import Task

# Create your tests here.

User=get_user_model()

class TaskListTest(APITestCase):
    def setUp(self):
        self.user=User.objects.create_user(username="ali", password= "12345678")
        self.client.force_authenticate(user=self.user)

    def test_create_task(self):
        response=self.client.post("/api/tasks/", {"title": "Learn DRF", "description": "Today"})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 1)