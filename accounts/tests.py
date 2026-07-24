from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

# Create your tests here.

User=get_user_model()

class RegisterTest(APITestCase):
    def test_user_can_register(self):
        data={
            "username": "ali",
            "email": "ali@gmail.com",
            "password": "12345678"
        }

        response=self.client.post("/api/accounts/register/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)



class LoginTest(APITestCase):
    def setUp(self):
        self.user=User.objects.create_user(username="ali", email= "ali@gmail.com", password= "12345678")

    def test_login(self):
        response=self.client.post("/api/accounts/login/", {"username": "ali", "password": "12345678"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
