import React, { useContext, useState } from "react";
import "./css/GameCategory.css";
import { HomeContext } from "../Contexts/HomeContext";
import Items from "../Components/Items/Items";
import Footer from "../Components/Footer/Footer";

const GameCategory = (props) => {
  const all_product = useContext(HomeContext);
  const [sortBy, setSortBy] = useState(null);

  const sortProducts = (sortBy) => {
    let sortedProducts = [...all_product];
    switch (sortBy) {
      case "priceHighToLow":
        sortedProducts.sort((a, b) => b.new_price - a.new_price);
        break;
      case "priceLowToHigh":
        sortedProducts.sort((a, b) => a.new_price - b.new_price);
        break;
      case "nameAZ":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const sortedProducts = sortBy ? sortProducts(sortBy) : all_product;
  return (
    <div className="game-category">
      <img className="gamecategory-banner" src={props.banner} alt="" />
      <div className="gamecategory-indexSort">
        <button onClick={() => handleSort("priceHighToLow")}>
          Sort by Price (High to Low)
        </button>
        <button onClick={() => handleSort("priceLowToHigh")}>
          Sort by Price (Low to High)
        </button>
        <button onClick={() => handleSort("nameAZ")}>Sort by Name (A-Z)</button>
      </div>
      <div className="gamecategory-products">
        {sortedProducts.map((item) => {
          if (props.category === item.category) {
            return (
              <Items
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default GameCategory;
