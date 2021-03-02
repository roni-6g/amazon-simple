import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, pd)=> total + pd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    
    const tax = (total / 10).toFixed(2) ;

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 12) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    return (
        <div>
            <h5>Items Order: {cart.length} </h5>
            <p>Product Price: {total}</p>
            <p>Shipping and Handling: {shipping} </p>
            <p>Estimated Tax: {tax} </p>
            <h4>Order Total: {grandTotal} </h4>
        </div>
    );
};

export default Cart;