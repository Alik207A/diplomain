import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '../Components/ProductsData';
import './productdetails.css';
import Navigation from './Navigation/Navigation';

const ProductDetails = () => {
  
  const { id } = useParams();
  const productId = parseInt(id);
  const product = ProductsData.find(prod => prod.id === productId);
  if (!product) {
    return <div>Product not found</div>;
  }
 
  return (
    <div className='detail-cart'>
      <nav>
      <Navigation/>
      </nav>
      <img src={product.thumbnail} alt='' />
      <h2>{product.title}</h2>
      <div className='prodinfo'>
      <p>Տարեթիվ: {product.data}</p>
      <p>Էկրան: {product.display}</p>
      <p>Տեսախցիկ: {product.camera}</p>
      <p>Չիպսետ: {product.proc}</p> 
      <p>Մարտկոց: {product.acum}</p>
      </div>   
      <p className='price'>{product.price} Դրամ</p>
    </div>
  );
};

export default ProductDetails;
