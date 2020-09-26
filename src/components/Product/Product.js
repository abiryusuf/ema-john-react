import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props.product)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className ='product'>
          <div>
            <img src={img} alt=""/>
          </div>
          <div>
             <h4 className='product-name'>{name}</h4>
             <br/>
             <p>by: {seller}</p>
             <p>$ {price}</p>
             <p>only {stock} left in stock - order soon</p>
          </div>
        </div>
    );
};

export default Product;