import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props.product.key)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className ='product'>
          <div>
            <img src={img} alt=""/>
          </div>
          <div className ='cart'>
             <h4 className='product-name'>{name}</h4>
             <br/>
             <p>by: {seller}</p>
             <p>$ {price}</p>
             <p>only {stock} left in stock - order soon</p>
             <button className = 'button' onClick = {() => props.handleProduct(props.product)}> <FontAwesomeIcon icon={ faShoppingCart} />Add to Cart</button>
          </div>
        </div>
    );
};

export default Product;