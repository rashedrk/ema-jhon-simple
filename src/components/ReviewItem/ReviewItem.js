import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    return (
        <div className='item'>
            <h4 className='product-name' >{name}</h4>
            <p><small>Price: {price} </small></p>
            <p>Quantitiy: {quantity}</p>
            <button onClick={()=>props.handleRemoveProduct(key)} className='cart-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;