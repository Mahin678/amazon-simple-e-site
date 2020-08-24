import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const allItem = props.cart;
    const Price = allItem.reduce((total , i)=> total + i.price,0);
    const tax = Price /10;
    let ShippingCost = 0;
    if(Price === 0 ){
        ShippingCost = 0;
    }
    else if(Price > 0 && Price < 100 ){
        ShippingCost = 17.5; 
    }
    else if( Price < 200 && Price > 0){
        ShippingCost = 10.5; 
    }
    else if (Price > 200 ) {
        ShippingCost = 5.5;
    }
    else {
        ShippingCost=0;
    }
    return (
        <div>
            <p>Total Item : {allItem.length} </p>
            <p> price : {Price}</p>
    <p>Shipping cost : {ShippingCost}</p>
    <p>vat  : {Math.round(tax)}</p>
    <p>Total Price {Math.round(Price+ShippingCost+tax)}</p>
        </div>
    );
};

export default Cart;