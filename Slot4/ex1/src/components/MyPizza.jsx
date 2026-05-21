import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
function MyPizza({ pizza }) {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={pizza.imgSrc} />
                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                            <Card.Text>
                                ID: {pizza.id} <br />
                                Description: {pizza.description} <br />
                                Old Price: {pizza.oldPrice} <br />
                                New Price: {pizza.newPrice} <br />
                                Tag: {pizza.tag}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
export default MyPizza;