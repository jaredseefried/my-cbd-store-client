import React, { useState, useEffect } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// CSS
import './ProductList.css'

// Components
import ProductCard from '../ProductCard/ProductCard'

// API 
import API from '../../utils/API'

// Full Catalog List - Functional Component 
const ProductList = (props) => {

  // useState Hook
  const [catalog, setCatalog] = useState([])

  // useEffect Hook - Load Product catalog on Mount
  useEffect(() => {
    getCatalog();
  }, []);

  // GET the catalog list from the database
  const getCatalog = () => {
    API.getProductCatalog()
      .then((response) => {
        // Take the response from the API (the data you requested)
        const data = response.data
        setCatalog(data)
        console.log(catalog);
      })
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          {catalog.map((item, i) => (
            <ProductCard
              {...catalog}
              key={item._id}
              brand={item.brand}
              type={item.type}
              flavor={item.flavor}
              size={item.size}
              className={item.className}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;