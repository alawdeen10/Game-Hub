import React from "react";
import "./RelatedProducts.css";
import data_product from "../assets/data";
import Items from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h1>Related Games</h1>
      <hr />
      <div className="related-products-items">
        {data_product.map((item, index) => {
          return (
            <Items
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
