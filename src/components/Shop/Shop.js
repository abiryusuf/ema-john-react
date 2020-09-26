import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    //cart
    const [cart, setCart] = useState([]);

    const handleProduct= (product) => {
        //console.log("click")
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (

        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product 
                    handleProduct = {handleProduct}
                    product={pd}>

                    </Product>)
                }

            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            <h5> Order Summary: {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;