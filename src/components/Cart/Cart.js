import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for(var i = 0; i<cart.length; i++){
        var product = cart[i]
        total = total + product.price;
        var str = total.toFixed(2)
        var tax = total/8.7;
        //var taxRate = tax.toFixed(2)
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
    
    var totalPrice  = total + shipping + tax;
    var priceTotal = totalPrice.toFixed(2)

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length} </p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total Price: {priceTotal}</p>
        </div>
    );
};

export default Cart;