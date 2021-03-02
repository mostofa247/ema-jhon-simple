import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,pd) => total+pd.price, 0);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total=total+product.price;
    }

    var sTotal = 0;
    if(total>40){
        sTotal=total-10;
    }
    else{
        sTotal=total;
    }
    return (
        <div>
            <h1>Add To Cart</h1>
            <h3>Item: {cart.length}</h3>
            <h2>TotalPrice:$ {sTotal}</h2>
        </div>
    );
};

export default Cart;