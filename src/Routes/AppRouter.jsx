import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Products from '../Pages/Products/Products';
import ProductDetails from '../Components/ProductDetails';
import Aboutme from '../Components/AboutMe/Aboutme';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/about' Component={Aboutme} />
        </Route>
      </Routes>
  );
}

export default AppRouter;
