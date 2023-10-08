import React, { useEffect, useState } from 'react';
import ProductsContext from './ProductsContext';
import axios from 'axios';

const ProductsState = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Hello = () => {
    console.log("Hello there...");
  };

  const GetAllProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data?.products);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  const contextValue = {
    Hello,
    products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
     <div className="">
          {loading? (
            <div className="text-center  flex flex-col justify-center items-center h-screen  text-gray-600">
              <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">Error: {error.message}</div>
          ) : (
            children
          )}
      </div>
    </ProductsContext.Provider>
  );
};

export default ProductsState;
