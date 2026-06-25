from django.shortcuts import render
from rest_framework import viewsets

from todos.models import Tarea
from todos.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Tarea.objects.all().order_by('-created_at')
    serializer_class = TodoSerializer
