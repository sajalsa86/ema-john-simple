import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //from online data is off
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        //from ofline data is on
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // add to cart function
    const handelAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    };
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                ></Product>)}
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length} </p>
            </div>
        </div>
    );
};


export default Shop;