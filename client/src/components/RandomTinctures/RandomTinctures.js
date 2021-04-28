import React, { useState, useEffect } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// CSS
import './RandomTinctures.css'

// Components
import ProductCard from '../ProductCard/ProductCard'

// API 
import API from '../../utils/API'

const RandomTinctures = (props) => {
  const [catalog, setCatalog] = useState([])
  useEffect(() => {
    // getCatalog();
    randomTinctures()
  }, []);

  // GET the catalog list from the database
  const getCatalog = () => {
    API.getProductCatalog()
      .then((response) => {
        // Take the response from the API (the data you requested)
        const data = response.data
        setCatalog(data)
      })
      .then(() => {
        console.log(catalog);
      })
  }

  const randomTinctures = () => {
    API.getProductCatalog()
      .then((response) => {
        // Take the response from the API (the data you requested)
        const data = response.data
        const filteredType = data.filter((object) => {
          return object.type === 'Tincture'
        })
        const tinctureCBD = filteredType.sort(() => Math.random() - Math.random()).slice(0, 8)
        // console.log(randomCBD);
        setCatalog(tinctureCBD)

      })
  }


  return (
    <Container className="random-tinctures-container">
      <Row className="justify-content-md-center">
        {catalog.map((item) => (
          <ProductCard
            {...catalog}
            key={item._id}
            brand={item.brand}
            type={item.type}
            flavor={item.flavor}
            size={item.size}
            price={item.msrp}
            description={item.description}
            className={item.className}
          />
        ))}
      </Row>
    </Container>
  );
}

export default RandomTinctures;