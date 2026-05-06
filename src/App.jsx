import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Product state
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 499, inStock: true },
  ]);

  // Filter state
  const [filter, setFilter] = useState('all');

  // Remove product function
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Filter logic
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Filter buttons */}
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('inStock')}>In Stock</button>
      <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>

      {/* Product list */}
      <ProductList 
        products={filteredProducts} 
        removeProduct={removeProduct} 
      />
    </div>
  );
};

export default App;