import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

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
    //get and set quantity from db
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        }
    }, [products])
    // add to cart function
    const handelAddToCart = product => {
        //advance code for quantity from db
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)

        //const newCart = [...cart, product];
        //setCart(newCart)
        //get and set quantity from db
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;