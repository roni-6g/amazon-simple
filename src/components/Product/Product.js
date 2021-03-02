import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3> {name} </h3>
                <p><small>By: {seller}</small></p>
                <br />
                <p><small>${price}</small></p>
                <p>
                    <small>Only{stock}left in stock - order soon</small>
                </p>
                <button onClick={()=> props.handleProduct(props.product)}> 
                    <FontAwesomeIcon icon={faShoppingCart}/> Add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;