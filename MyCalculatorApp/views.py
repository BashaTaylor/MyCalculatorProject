from django.shortcuts import render, redirect
from .models import Calculation

def index(request):
    calculations = Calculation.objects.all().order_by('-timestamp')  # Ensure this field exists in your model
    result = None
    if request.method == 'POST':
        expression = request.POST.get('expression', '')
        try:
            result = eval(expression)
            Calculation.objects.create(expression=expression, result=result)
        except Exception as e:
            result = 'Error'
    
    return render(request, 'index.html', {'calculations': calculations, 'result': result})

def clear_history(request):
    Calculation.objects.all().delete()
    return redirect('index')
