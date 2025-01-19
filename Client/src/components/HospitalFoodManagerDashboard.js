import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

const HospitalFoodManagerDashboard = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [patients, setPatients] = useState([]);
  const [pantryTasks, setPantryTasks] = useState([]);
//   const [patientsDataforAlert, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const deliveriesData = await api.get('/deliveries');
      const patientsData = await api.get('/patients');
      const pantryTasksData = await api.get('/pantry');
    //   const alertsData = await api.get('/patients');

      setDeliveries(deliveriesData.data);
      setPatients(patientsData.data);
      setPantryTasks(pantryTasksData.data);
    //   setAlerts(alertsData.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Hospital Food Manager Dashboard</h2>
      <Row>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Food Deliveries</Card.Title>
              <Card.Text>Total Deliveries: {deliveries.length}</Card.Text>
              <Button variant="primary" as={Link} to="/deliveries">View Deliveries</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Patients</Card.Title>
              <Card.Text>Total Patients: {patients.length}</Card.Text>
              <Button variant="primary" as={Link} to="/">View Patients</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Pantry Tasks</Card.Title>
              <Card.Text>Total Tasks: {pantryTasks.length}</Card.Text>
              <Button variant="primary" as={Link} to="/pantry">View Pantry Tasks</Button>
            </Card.Body>
          </Card>
        </Col>
         
        {/* <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Alerts</Card.Title>
              <Card.Text>Total Alerts: {Alert.length}</Card.Text>
              <Button variant="danger">View Alerts</Button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default HospitalFoodManagerDashboard;
