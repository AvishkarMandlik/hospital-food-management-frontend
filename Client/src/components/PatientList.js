import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../services/api'; // Assuming this is set up correctly.

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get('/patients'); // Ensure this path is correct
        console.log('Fetched patients:', response.data); // Log for debugging
        setPatients(response.data); // Set the patients to state
      } catch (err) {
        console.error('Error fetching patients:', err);
        setError('Failed to load patient data.'); // Handle errors
      }
    };

    fetchPatients();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="container mt-5">
      <h2>Patient List</h2>
      {error && <p className="text-danger">{error}</p>} {/* Show error message */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Room Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.roomNumber}</td>
              <td>
                <button className="btn btn-info">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientList;
