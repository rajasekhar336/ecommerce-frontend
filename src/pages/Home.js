import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${config.apiUrl}/products/getProducts.php`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
