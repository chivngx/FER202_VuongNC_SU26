import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import MyPizza from "./MyPizza";
import pizzas from "../data/pizzaData";

function PizzaList() {
  return (
    <div>
      <Container style={{ marginTop: "20px" }} md={4}>
        <Row>
          {pizzas.map((pizza) => (
            <Col key={pizza.id} sm={12} md={6} lg={4}>
              <MyPizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PizzaList;