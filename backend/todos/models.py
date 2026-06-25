from django.db import models


class Tarea(models.Model):
    STATUS_CHOICES = [
        ("completada", "Completada"),
        ("pendiente", "Pendiente"),
        ("cancelada", "Cancelada"),
    ]

    titulo = models.CharField(max_length=200)
    estado = models.CharField(choices=STATUS_CHOICES, max_length=50, default="pendiente")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"""Titulo: {self.titulo}
                    Estado: {self.estado}
                    Creada: {self.created_at}"""
