from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.decorators import action
from rest_framework.response import Response
from .permissions import IsOwner
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class=TaskSerializer
    filter_backends=[DjangoFilterBackend, SearchFilter, OrderingFilter]
    permission_classes=[IsAuthenticated]
    filterset_fields=["status"]
    search_fields=["title", "description"]
    ordering_fields=["created_at", "updated_at", "deadline"]
    ordering=["-created_at"]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=["post"])
    def complete(self, request, pk=None):
        task=self.get_object()
        task.status=Task.Status.DONE
        task.save()

        serializer=self.get_serializer(task)

        return Response(serializer.data, status=status.HTTP_200_OK)