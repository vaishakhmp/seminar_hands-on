import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3' },
];

// ProductList component
const ProductList = () => (
  <div>
    <h2>Product List</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

// ProductDetail component
const ProductDetail = () => {
  const { productId } = useParams();

  // Find the product with the matching ID
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

// App component
const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;


