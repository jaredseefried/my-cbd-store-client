import React from 'react';

// React Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Images
import srcImage from '../../images/main-cover.jpg'

// CSS
import './ProductCard.css'

function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.type}</Card.Header>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Flavor: {props.flavor}</Card.Text>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;