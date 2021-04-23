import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

function ProductList(props) {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <ProductCard />

          {/* {portfolioArray.map((item, i) => (
          <MyCard
            {...portfolioArray}
            key={i}
            src={item.src}
            alt={item.alt}
            id={item.id}
            text={item.text}
            title={item.title}
            className={item.className}
          />
        ))} */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;