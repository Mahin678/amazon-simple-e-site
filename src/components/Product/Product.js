import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

    const Product = (props) => {
    const productInfo = props.allProduct;
    const {name,img,seller,price,stock} = productInfo;

return (
    <div className="product-card" >
        <div className="img-container"  >
            <img src={img} alt=""/>
        </div>
        <div className="details-container" >
            <p style={{color:"blue",fontWeight:"500" ,fontSize:"18px" }}  > {name}</p>
            <p><small>by: {seller}</small></p>
            <p>price {price}</p>
            <p>Only {stock} left in stock -order soon</p>
            <button onClick={() => props.handleClick(props.allProduct)} > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
        </div>
    </div>
    );
};

export default Product;