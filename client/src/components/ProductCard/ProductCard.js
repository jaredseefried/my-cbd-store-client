import React from 'react';
import Card from 'react-bootstrap/Card'

function ProductCard(props) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>
          {props.size}
          {props.msrp}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;