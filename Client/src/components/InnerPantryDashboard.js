import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import api from '../services/api';

const InnerPantryDashboard = () => {
  const [pantryTasks, setPantryTasks] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pantryTasksData = await api.get('/tasks');
      const deliveriesData = await api.get('/deliveries');

      setPantryTasks(pantryTasksData.data);
      setDeliveries(deliveriesData.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Inner Pantry Dashboard</h2>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Pantry Tasks</Card.Title>
              <Card.Text>Total Tasks: {pantryTasks.length}</Card.Text>
              <Button variant="primary">View Pantry Tasks</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Deliveries</Card.Title>
              <Card.Text>Total Deliveries: {deliveries.length}</Card.Text>
              <Button variant="primary">View Deliveries</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InnerPantryDashboard;
