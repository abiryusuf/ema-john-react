import React from 'react';

const Cart = (props) => {

    
    const cart = props.cart;
    //let taxRate;
    let total = 0;
    for(var i = 0; i<cart.length; i++){
        var product = cart[i]
        total = total + product.price;
        var str = total.toFixed(2)
        var tax = (str/8.7).toFixed(2);
       //taxRate = tax.toFixed(2)
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total >0){
        shipping = 12.99;
    }
    // const formateNumber = num =>{
    //     const precision = num.toFixed(2);
    //     return Number(precision);
    // }
   var totalPrice  = (total + shipping + Number(tax)).toFixed(2);
    // var priceTotal = Number.totalPrice.toFixed(2)

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length} </p>
            <p>Product Price: {str}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;