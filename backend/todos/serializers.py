from rest_framework import serializers

from todos.models import Tarea


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = ['id', 'titulo', 'estado', 'created_at']