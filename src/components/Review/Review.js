import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
   const [cart,setCart]= useState([]);
   useEffect(()=>{
    const savedCart=getDatabaseCart();
    const productKeys= Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
        const products = fakeData.find(pd => pd.key === key);
        products.quantity= savedCart[key];
        return products;
    })
    setCart(cartProducts);
    
   },[])
    return (
        <div>
            {
                cart.map(pd => <ReviewItem product={pd}></ReviewItem>)
            }

        </div>
    );
};

export default Review;