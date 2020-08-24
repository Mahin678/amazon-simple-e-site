import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart ,setCart] = useState([])
    const handleClick = (product) => {
    const newCart = [...cart , product]
    setCart(newCart)
    }   

    return (
        <div className="shop-container" >
            <div className="product-container">
                <h1>This is shop {products.length}</h1>

                {
                    products.map(item => <Product handleClick={handleClick} allProduct={item}  ></Product>)
                }

            </div>
            <div className="cart-container"  >
            <h4>Summery : </h4>
            <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;