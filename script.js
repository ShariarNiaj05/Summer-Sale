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
    totalPriceDeci = totalPrice.toFixed(2);

    if(totalPriceDeci < 200 ){
        document.getElementById("coupon-btn").disabled = true;
    }

    // calculating the discount amount 
    discount = totalPriceDeci * 0.2;
    discountDeci = discount.toFixed(2)

    // calculating the grand total amount
    grandTotal = totalPriceDeci - discountDeci;
    grandTotalDeci = grandTotal.toFixed(2);

    // setting the total price, discount and grand total in the cart
    document.getElementById('total-price').innerText = totalPriceDeci;
    document.getElementById("discount-price").innerText = discountDeci;
    document.getElementById("grand-total").innerText = grandTotalDeci;
    


    console.log(grandTotalDeci);
}