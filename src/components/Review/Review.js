import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import thankYouImage from '../../images/giphy.gif';
const Review = () => {
   const [cart,setCart]= useState([]);
   const [orderPlaced,setOrderPlaced] = useState(false);
   const handlePlaceOrder=()=>{
        setCart([]);
        processOrder();
        setOrderPlaced(true);
   };
   const handleRemoveProduct = productkey => {
     const newCart = cart.filter(product => product.key !== productkey);
     setCart(newCart);
     removeFromDatabaseCart(productkey);
   };
   useEffect(()=>{
    const savedCart=getDatabaseCart();
    const productKeys= Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
        const products = fakeData.find(pd => pd.key === key);
        products.quantity= savedCart[key];
        return products;
    })
    setCart(cartProducts);
   },[]);
   let thankyou;
   if (orderPlaced) {
     thankyou = <img src={thankYouImage} alt="" />
   }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem handleRemoveProduct={handleRemoveProduct} product={pd}></ReviewItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='cart-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;