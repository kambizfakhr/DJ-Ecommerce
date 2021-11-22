from django.shortcuts import render
from .models import *
def store(requset):
    products = Product.objects.all()
    context ={'products':products}
    return render(requset,'store/store.html',context)

def cart(requset):
    context ={}
    return render(requset,'store/cart.html',context)

def checkout(requset):
    context ={}
    return render(requset,'store/checkout.html',context)
