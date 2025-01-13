import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../services/api';

const DietChartForm = () => {
  const [patientId, setPatientId] = useState('');
  const [morningMeal, setMorningMeal] = useState('');
  const [eveningMeal, setEveningMeal] = useState('');
  const [nightMeal, setNightMeal] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDietChart = {
      patientId,
      morningMeal,
      eveningMeal,
      nightMeal,
      instructions,
    };

    try {
      await api.post('/diet-charts', newDietChart);
      alert('Diet chart created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Diet Chart</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="patientId">
          <Form.Label>Patient ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="morningMeal">
          <Form.Label>Morning Meal</Form.Label>
          <Form.Control
            type="text"
            value={morningMeal}
            onChange={(e) => setMorningMeal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="eveningMeal">
          <Form.Label>Evening Meal</Form.Label>
          <Form.Control
            type="text"
            value={eveningMeal}
            onChange={(e) => setEveningMeal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="nightMeal">
          <Form.Label>Night Meal</Form.Label>
          <Form.Control
            type="text"
            value={nightMeal}
            onChange={(e) => setNightMeal(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="instructions">
          <Form.Label>Special Instructions</Form.Label>
          <Form.Control
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DietChartForm;
