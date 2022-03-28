var updateBtns = document.getElementsByClassName('update-cart');

for( var i =0 ; i< updateBtns.length ; i++)
{
    updateBtns[i].addEventListener('click', function(){
        var productID = this.dataset.product;
        var action = this.dataset.action;
        console.log('Product ID:', productID , ' Action:',action);
        console.log('User: ', user);

        if(user==='AnonymousUser'){
            console.log('Your are not logged in');
        }else{
            updateUserOrder(productID ,action)
        }
    })
}

function updateUserOrder(productID ,action){
    console.log('You are Logged in, data send...');
    var url = '/update_item/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'productID':productID,
              'action': action,
        })
    })
    
    .then((response) => {
        return response.json()
    })
    
    .then((data) =>{
        console.log('Data:', data);
    })
}