import React from 'react';

const Product = (props) => {
    console.log(props.product)
    return (
        <div>
            <h1>This is product</h1>
    <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;