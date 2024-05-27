import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/products',
    };

    axios.request(options)
      .then(function (response) {
        setProductsData(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!productsData) return <div>Loading products...</div>;

  return (
    <div>
      <h2>Products</h2>
      <pre>{JSON.stringify(productsData, null, 2)}</pre>
    </div>
  );
}

export default Products;

