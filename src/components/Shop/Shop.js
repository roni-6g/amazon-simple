import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';
import './Shop.css';
import Cart from './../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(pd =>
                    <Product
                        product={pd}
                        handleProduct={handleAddProduct}
                    ></Product>
                )}
            </div>
            <div className="cart-container">
               <h2>Cart Summary</h2>
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;