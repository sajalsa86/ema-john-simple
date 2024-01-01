import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const handelAddToCart = props.handelAddToCart;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const startIcon = <FontAwesomeIcon icon={faStar} />

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-price'>Price : ${price}</h6>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} {startIcon}{startIcon}{startIcon}</p>
            </div>

            <button onClick={() => handelAddToCart(props.product)} className='cart-btn' > add to cart {cartIcon}</button>
        </div >
    );
};

export default Product;