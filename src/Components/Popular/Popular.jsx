import React from "react";
import "./Popular.css";
import data_product from "../assets/data.js";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR GAMES AMONG GAMERS</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
