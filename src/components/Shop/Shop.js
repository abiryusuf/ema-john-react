import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    //cart
    const [cart, setCart] = useState([]);

    const handleProduct= (product) => {
       
        const newCart = [...cart, product];
        setCart(newCart);

    }
//here 
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
                <Cart cart ={cart} total = {cart.price}></Cart>
            </div>

        </div>
    );
};

export default Shop;