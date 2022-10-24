import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name,quantity}=props.product;
    return (
        <div className='item'>
            <h4 className='product-name' >{name}</h4>
            <p>Quantitiy: {quantity}</p>
            <button className='cart-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;