import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Hospital Food Management Dashboard</h2>
      <Row className="mt-4">
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Patients</Card.Title>
              <Card.Text>View and manage patient details and diets.</Card.Text>
              <Button variant="primary" as={Link} to="/patients">Go to Patients</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Pantry</Card.Title>
              <Card.Text>Track food preparation, staff, and pantry tasks.</Card.Text>
              <Button variant="primary" as={Link} to="/pantry">Go to Pantry</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Manage Deliveries</Card.Title>
              <Card.Text>Track meal deliveries to patient rooms.</Card.Text>
              <Button variant="primary" as={Link} to="/deliveries">Go to Deliveries</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
