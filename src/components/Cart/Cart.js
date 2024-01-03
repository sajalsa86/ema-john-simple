import React from 'react';
import './Cart.css';
import { getTotalPrice, getTotalShipping } from '../../utilities/calculate';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        /*  if (product.quantity === 0) {
             product.quantity = 1
         } */
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const totalTax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className="cart">
            <h5 className='cart-heading'>Product Summary</h5>
            <p>Total Product: {quantity} </p>
            <p>Total Price: $ {totalPrice.toFixed(2)} </p>
            <p>Total Shipping Charge: ${totalShipping.toFixed(2)} </p>
            <p>Tax: $ {totalTax.toFixed(2)}</p>
            <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
