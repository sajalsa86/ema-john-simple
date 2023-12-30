import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, quantity, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-price'>Price : ${price}</h6>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button className='cart-btn'>add to cart</button>
        </div>
    );
};

export default Product;