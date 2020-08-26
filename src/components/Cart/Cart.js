import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const totalPrice = cart.reduce((totalPrice, course) => totalPrice + course.price, 0)

    // let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const course = cart[i];
    //     totalPrice = totalPrice + course.price;
    // }

    return (
      <div className='cart-container p-3'>
        <p>Buy Courses : {cart.length}</p>
        <p>Total Price : ${totalPrice.toFixed(2)}</p>
        <button className='btn btn-outline-success cart-btn'>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className='ml-2'>Buy Now</span>
        </button>
      </div>
    );
};

export default Cart;