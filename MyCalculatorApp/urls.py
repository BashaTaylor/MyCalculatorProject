from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('clear_history/', views.clear_history, name='clear_history'),
]
