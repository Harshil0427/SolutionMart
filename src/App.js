import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AllProduct from './AllProduct';
import ProductDetails from "./ProductDetails";
import AddtoCart from "./AddtoCart";
import ViewCart from "./ViewCart";
import PlaceOrder from "./PlaceOrder";

function App() {
    return (
      <div>
        <Router>
          <h3>
            <Link to='./AllProduct'> All Product </Link>
          </h3>
          <Routes>
            <Route path='/AllProduct' element={<AllProduct />} />
            <Route path='/ProductDetails/:id' element={<ProductDetails />} />
            <Route path='/AddtoCart' element={<AddtoCart />} />
            <Route path='/ViewCart' element={<ViewCart />} />
            <Route path='/PlaceOrder' element={<PlaceOrder />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;