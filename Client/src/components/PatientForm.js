import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../services/api';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [diseases, setDiseases] = useState('');
  const [allergies, setAllergies] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      diseases: diseases.split(','),
      allergies: allergies.split(','),
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
      contactInfo,
      emergencyContact,
    };

    try {
      await api.post('/patients', newPatient);
      alert('Patient added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Patient</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="diseases">
          <Form.Label>Diseases</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter diseases separated by commas"
            value={diseases}
            onChange={(e) => setDiseases(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="allergies">
          <Form.Label>Allergies</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter allergies separated by commas"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="roomNumber">
          <Form.Label>Room Number</Form.Label>
          <Form.Control
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="bedNumber">
          <Form.Label>Bed Number</Form.Label>
          <Form.Control
            type="text"
            value={bedNumber}
            onChange={(e) => setBedNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="floorNumber">
          <Form.Label>Floor Number</Form.Label>
          <Form.Control
            type="text"
            value={floorNumber}
            onChange={(e) => setFloorNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="contactInfo">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="emergencyContact">
          <Form.Label>Emergency Contact</Form.Label>
          <Form.Control
            type="text"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PatientForm;
