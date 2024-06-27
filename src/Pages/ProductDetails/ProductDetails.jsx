import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../Components/ProductsData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(prod => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      
    </div>
  );
};

export default ProductDetails;
