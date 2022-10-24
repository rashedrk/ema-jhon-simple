import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
   
    const {name,img,seller,price,stock,key}=props.productdata;
    const {showAddToCart}=props;
    return (
        <div className='product'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='product-info'>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>${price}</p>
                <p>
                    <smaller>only {stock} left in stock - order soon</smaller>
                </p>
                {showAddToCart && <button className='cart-button' onClick={() => props.handleAddProduct(props.productdata)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;