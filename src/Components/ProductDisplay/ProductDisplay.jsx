import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { HomeContext } from "../../Contexts/HomeContext";
import { CartContext } from "../../Contexts/HomeContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="productdisplay">
      <div className="product-images">
        <div className="product-display-left">
          <div className="product-display-image-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="product-display-image">
            <img
              className="product-display-main-image"
              src={product.image}
              alt=""
              width="500px"
            />
          </div>
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(700)</p>
        </div>
        <div className="product-display-right-price">
          <div className="product-old-price">₹{product.old_price}</div>
          <div className="product-new-price">₹{product.new_price}</div>
        </div>
        <div className="product-description">
          The Witcher 3: Wild Hunt is a 2015 action role-playing game developed
          and published by CD Projekt. It is the sequel to the 2011 game The
          Witcher 2: Assassins of Kings and the third game in The Witcher video
          game series, played in an open world with a third-person perspective.
        </div>
        <div className="product-platform">
          <h1>Platform</h1>
          <div className="product-platforms">
            <div>PC</div>
            <div>Playstation</div>
            <div>Xbox</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="product-category">
          <span>Genre :</span>PC, Action Role Playing, Adventure
        </p>
        <p className="product-category">
          <span>Developer :</span>CD Projekt Red
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
