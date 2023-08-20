
let totalPrice = 0;
let discount = 0;
let grandTotal = 0;
function productCard(target){

    
    // getting the item name
    const cartItemContainer = document.getElementById('cart-item-container');
    const itemName = target.childNodes[3].childNodes[3].innerText;

    // creating element and placing the item name 
    const li = document.createElement("li");
    li.innerText = itemName;
    cartItemContainer.appendChild(li);

    // getting the price from individual card 
    const price = target.childNodes[3].childNodes[5].innerText;
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    const totalPriceDeci = totalPrice.toFixed(2);

    if(totalPriceDeci <= 0){
        document.getElementById('purchase-btn').disabled = true;
    }else{
        document.getElementById('purchase-btn').disabled = false;
    }

    if(totalPriceDeci < 200 ){
        document.getElementById("coupon-btn").disabled = true;
    
    }else{
        document.getElementById("coupon-btn").disabled = false;
    
    }

    // calculating the discount amount 
    
    discount = totalPriceDeci * 0.2;
    const discountDeci = discount.toFixed(2);
    
    

    // calculating the grand total amount
    grandTotal = totalPriceDeci - discountDeci;
    const grandTotalDeci = grandTotal.toFixed(2);

    // setting the total price, discount and grand total in the cart
    document.getElementById('total-price').innerText = totalPriceDeci;
    document.getElementById("discount-price").innerText = discountDeci;
    document.getElementById("grand-total").innerText = grandTotalDeci;
    



}


// go home button redirection 
document.getElementById('goHome-btn').addEventListener('click', function(){
    window.location.href = 'index.html'
})

