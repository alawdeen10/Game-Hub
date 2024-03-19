import React from "react";
import "./CartItem.css";
import remove_icon from "../assets/cart_cross_icon.png";
import all_product from "../assets/all_product";
import { useContext } from "react";
import { CartContext } from "../../Contexts/HomeContext";

const CartItem = (props) => {
  const { getTotalAmount, cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="cart-items">
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-format cart-item-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                  className="cart-items-remove-icon"
                />
                <hr />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>₹{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Delivery Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>₹{getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-box">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
