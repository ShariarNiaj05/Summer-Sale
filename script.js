let totalPrice = 0;
let discount = 0;
let grandTotal = 0;

function productCard(target) {

    // getting the item name
    const cartItemContainer = document.getElementById('cart-item-container');
    const itemName = target.childNodes[3].childNodes[3].innerText;

    // creating element and placing the item name 
    const count = cartItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${itemName}`;
    cartItemContainer.appendChild(p);



    // getting the price from individual card 
    const price = target.childNodes[3].childNodes[5].innerText;
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    const totalPriceDeci = totalPrice.toFixed(2);
    document.getElementById('total-price').innerText = totalPriceDeci;

    // make purchase button disaled and enabled
    if (totalPriceDeci <= 0) {
        document.getElementById('purchase-btn').disabled = true;

    } else {
        document.getElementById('purchase-btn').disabled = false;
    }

    // const coupon = couponValue('coupon-btn');

    // if (coupon === 'SELL200') {
    //     discount = totalPriceDeci * 0.2;
    //     const discountDeci = discount.toFixed(2);
    //     document.getElementById("discount-price").innerText = discountDeci;

    // }



    if (totalPriceDeci > 199) {
        document.getElementById("coupon-btn").disabled = false;
    }
    else {
        document.getElementById("coupon-btn").disabled = true;
    }


}


// go home button redirection 
document.getElementById('goHome-btn').addEventListener('click', function () {
    window.location.href = 'index.html'
})





// function couponValue(id) {
//     document.getElementById(id).addEventListener('click', function () {
//         const couponFieldValue = document.getElementById('coupon-input');
//         const couponInputValue = couponFieldValue.value;
//         return couponInputValue;

//     })

// }


function applyCoupon() {
    const couponCode = "SELL200";
    const discountRate = 0.20;    

    
    const totalPriceElement = document.getElementById('total-price');
    const discountPriceElement = document.getElementById('discount-price');
    const grandTotalElement = document.getElementById('grand-total');
    const couponInput = document.getElementById('coupon-input');

    
    const totalPrice = parseFloat(totalPriceElement.innerText);

    // Check if the entered coupon code matches the expected coupon code
    if (couponInput.value === couponCode) {
        // discount 
        const discountAmount = totalPrice * discountRate;
        discountPriceElement.innerText = discountAmount.toFixed(2);

        // grand total
        const grandTotal = totalPrice - discountAmount;
        grandTotalElement.innerText = grandTotal.toFixed(2);

        couponInput.value = "";
    } else {
        alert("Invalid coupon code.");
        couponInput.value = "";
    }


}
