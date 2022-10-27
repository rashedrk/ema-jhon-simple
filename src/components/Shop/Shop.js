import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]= useState(first10);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(key => {
            const existingProduct = fakeData.find(pd => pd.key === key);
            existingProduct.quantity= savedCart[key];
            return existingProduct;
        });
        setCart(cartProduct);
    },[]);
    const handleAddProduct = (product) =>{
        let count,newCart;
        const sameProduct=cart.find(pd => pd.key === product.key);
        if (sameProduct) {
            count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const otherProduct = cart.filter(pd => pd.key !== product.key);
            newCart = [...otherProduct,sameProduct];
        }
        else{
            count=1;
            product.quantity=1;
            newCart =[...cart,product];
        }       
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }
   
    return (
        <div className='shop-container'>
            <div className="product-container">
                    {
                        products.map(product => <Product showAddToCart={true} productdata={product} handleAddProduct={handleAddProduct}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='cart-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default Shop;