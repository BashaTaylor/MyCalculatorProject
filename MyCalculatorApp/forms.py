from django import forms
from .models import Calculation, UserPreference

class CalculationForm(forms.ModelForm):
    class Meta:
        model = Calculation
        fields = ['expression']

