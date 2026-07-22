from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class=TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)