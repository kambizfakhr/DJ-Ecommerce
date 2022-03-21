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
            console.log('You are Logged in, data send...');
        }
    })
}