import React from "react";
import { Row, Col, Card, Jumbotron, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const model = require("./models/snorkel1.glb");
  const background = require("./models/background.jpg");
  return (
    <div className="App">
      <Row>
        <Col>
          <Card style={{ width: "25rem" }}>
            <Jumbotron class="blog-title" fluid>
              <h1>
                Blog<b>Title</b>
              </h1>
            </Jumbotron>
            <Card.Body>
              <h3>Exciting Subheading!</h3>
              <br />
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
              <Button variant="primary">Leave Feedback</Button>
              <br />
              <br />
              <Button variant="warning">Go somewhere else</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <model-viewer
            src={model}
            alt="A 3D model of an astronaut"
            auto-rotate
            camera-controls
            exposure="0.6"
          />
        </Col>
      </Row>
    </div>
  );
}
