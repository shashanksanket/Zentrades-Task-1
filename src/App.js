import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const paginationRange = 5;

  useEffect(() => {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
      .then((res) => res.json())
      .then((data) => {
        const productsArray = Object.values(data.products);
        const sortedProducts = productsArray.sort((a, b) => b.popularity - a.popularity);
        setProducts(sortedProducts);
      });
  }, []);

  const categories = [...new Set(products.map((product) => product.subcategory))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.subcategory === selectedCategory)
    : products;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const startPage = Math.max(1, currentPage - Math.floor(paginationRange / 2));
    const endPage = Math.min(totalPageCount, startPage + paginationRange - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => (
      <button
        key={startPage + index}
        className={`page-button btn ${currentPage === startPage + index ? 'active' : ''}`}
        onClick={() => paginate(startPage + index)}
      >
        {startPage + index}
      </button>
    ));
  };

  return (
    <div className="App">
      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tag btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-container">
        <h1 className="text-2xl mt-5 font-bold mb-4">Products</h1>
        {currentItems.map((product) => (
          <div key={`${product.title}-${product.id}`} className="product-item border rounded-md p-4 mb-4">
            <div className="product-details">
              <div className="subcategory font-bold">{product.subcategory}</div>
              <div className="title">{product.title}</div>
              <div className="price font-bold text-green-500">${product.price}</div>
              <div className="popularity text-blue-500">Popularity: {product.popularity}</div>
            </div>
          </div>
        ))}
        <div className="pagination flex items-center justify-center mt-4">
          <button
            className={`page-button btn ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Back
          </button>
          {renderPageNumbers()}
          <button
            className={`page-button btn ${currentPage === Math.ceil(filteredProducts.length / itemsPerPage) ? 'cursor-not-allowed' : ''}`}
            onClick={() => paginate(Math.min(currentPage + 1, Math.ceil(filteredProducts.length / itemsPerPage)))}
            disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
