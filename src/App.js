import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import all_product from "./Components/assets/all_product.js";
import Home from "./Pages/Home";
import GameCategory from "./Pages/GameCategory";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import pc_banner from "./Components/assets/pc_banner.jpg";
import ps_banner from "./Components/assets/ps_banner.png";
import xbox_banner from "./Components/assets/xbox_banner.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pc"
            element={<GameCategory banner={pc_banner} category="pc" />}
          />
          <Route
            path="/ps"
            element={<GameCategory banner={ps_banner} category="ps" />}
          />
          <Route
            path="/xbox"
            element={<GameCategory banner={xbox_banner} category="xbox" />}
          />
          {/* Wrap Product component inside a Route component */}
          <Route
            path="/product/:productId"
            element={<Product all_product={all_product} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
