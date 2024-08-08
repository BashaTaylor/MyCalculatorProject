from django.urls import path
from . import views
from .views import calculator_view

urlpatterns = [
    path('', views.index, name='index'),
    path('clear_history/', views.clear_history, name='clear_history'),
    path('', calculator_view, name='calculator'),
]
