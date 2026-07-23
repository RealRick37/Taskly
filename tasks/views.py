from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.

class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class=TaskSerializer
    filter_backends=[DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields=["status"]
    search_fields=["title", "description"]
    ordering_fields=["created_at", "updated_at", "daedline"]
    ordering=["-created_at"]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)