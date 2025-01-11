import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../services/api';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await api.get('/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Patient List</h2>
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
