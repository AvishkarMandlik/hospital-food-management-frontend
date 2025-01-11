import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../services/api';

const DietChartList = () => {
  const [dietCharts, setDietCharts] = useState([]);

  useEffect(() => {
    const fetchDietCharts = async () => {
      const response = await api.get('/diet-charts');
      setDietCharts(response.data);
    };
    fetchDietCharts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Diet Chart List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Morning Meal</th>
            <th>Evening Meal</th>
            <th>Night Meal</th>
            <th>Special Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dietCharts.map((dietChart) => (
            <tr key={dietChart._id}>
              <td>{dietChart.patientId}</td>
              <td>{dietChart.morningMeal}</td>
              <td>{dietChart.eveningMeal}</td>
              <td>{dietChart.nightMeal}</td>
              <td>{dietChart.instructions}</td>
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

export default DietChartList;
