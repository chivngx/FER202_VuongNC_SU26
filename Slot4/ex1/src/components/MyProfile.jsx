import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
function MyProfile({ profile }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profile.imgSrc} />
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>
                  ID: {profile.id} <br />
                  Email: {profile.email} <br />
                  Github: {profile.githubLink}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MyProfile;