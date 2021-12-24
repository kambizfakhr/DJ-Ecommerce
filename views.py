from django.http import request
from django.shortcuts import render
from .models import *
def store(requset):
    products = Product.objects.all()
    context ={'products':products}
    return render(requset,'store/store.html',context)

def cart(requset):
    if requset.user.is_authenticated:
        customer = requset.user.customer
        order, created = Order.objects.get_or_create(customer=customer,complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_total':0 , 'get_cart_items':0}
    context ={'items':items, 'order':order}
    return render(requset,'store/cart.html',context)

def checkout(requset):
    context ={}
    return render(requset,'store/checkout.html',context)
