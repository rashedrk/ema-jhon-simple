import React from 'react';
import fakeData from '../../fakeData';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   
    const {name,img,seller,price,stock}=props.productdata;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className='product-name'>{name}</h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>${price}</p>
                <p>
                    <smaller>only {stock} left in stock - order soon</smaller>
                </p>
                <button className='cart-button' onClick={() => props.handleAddProduct(props.productdata)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;