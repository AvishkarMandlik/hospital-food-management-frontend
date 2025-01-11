// src/components/DeliveryForm.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const DeliveryForm = () => {
  const [mealBox, setMealBox] = useState('');
  const [deliveryPersonnel, setDeliveryPersonnel] = useState('');
  const [patientId, setPatientId] = useState('');
  const [status, setStatus] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/deliveries', {
        mealBox,
        deliveryPersonnel,
        patientId,
        status,
        timestamp,
        notes,
      });

      console.log('Delivery created successfully:', response.data);
    } catch (error) {
      console.error('Error creating delivery:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Delivery</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mealBox">
          <Form.Label>Meal Box</Form.Label>
          <Form.Control
            type="text"
            value={mealBox}
            onChange={(e) => setMealBox(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="deliveryPersonnel">
          <Form.Label>Delivery Personnel</Form.Label>
          <Form.Control
            type="text"
            value={deliveryPersonnel}
            onChange={(e) => setDeliveryPersonnel(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="patientId">
          <Form.Label>Patient ID</Form.Label>
          <Form.Control
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="timestamp">
          <Form.Label>Timestamp</Form.Label>
          <Form.Control
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Create Delivery
        </Button>
      </Form>
    </div>
  );
};

export default DeliveryForm;
