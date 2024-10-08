from django.shortcuts import render, redirect
from .models import Calculation
from django.views.decorators.csrf import csrf_protect

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

def calculate_result(expression):
    try:
        # Evaluate the expression
        result = eval(expression)

        # Round the result to 2 decimal places
        result = round(result, 2)

        return result
    except Exception as e:
        return "Error"

@csrf_protect
def calculator_view(request):
    result = None
    if request.method == 'POST':
        expression = request.POST.get('expression')
        try:
            # Evaluate the expression safely
            result = eval(expression)
        except Exception as e:
            result = str(e)
    return render(request, 'calculator.html', {'result': result})