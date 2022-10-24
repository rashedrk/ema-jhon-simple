import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
    const items=props.cart.length
    const product=props.cart;

    let itemPrice=0;
    for (let i = 0; i < product.length; i++) {
        const price = product[i].price;
        itemPrice = itemPrice + price;
    }

    let shipping=0;
    if(items<=5 && items>0)
    {
        shipping = 15;
    }
    else if(items>5){
        shipping = 10.99;
    }

    const total=itemPrice+shipping;
    const tax = itemPrice/10;
    const grandTotal = total+tax;
    function formatNumber(num) {
        return Number(num.toFixed(2))
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items ordered: {items}</h4>
            <p>
                <small>Items: ${formatNumber(itemPrice)}</small>
            </p>
            <p>
                <small>Shipping & Handaling: ${formatNumber(shipping)}</small>
            </p>
            <p>
                <small>Total before tax: ${formatNumber(total)}</small>
            </p>
            <p>
                <small>Estimated Tax: ${formatNumber(tax)}</small>
            </p>
            <h3 className='total'>Order Total: ${formatNumber(grandTotal)}</h3>
            <Link to='/review'>
                <button className='cart-button'>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;