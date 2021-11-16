from django.shortcuts import render

def store(requset):
    context ={}
    return render(requset,'store/store.html',context)

def cart(requset):
    context ={}
    return render(requset,'store/cart.html',context)

def checkout(requset):
    context ={}
    return render(requset,'store/checkout.html',context)
