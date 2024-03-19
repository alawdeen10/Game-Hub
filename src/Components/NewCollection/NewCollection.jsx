import React from "react";
import "./NewCollection.css";
import new_collection from "../assets/new_collections.js";
import Items from "../Items/Items.jsx";

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW GAMES</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
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

export default NewCollection;
