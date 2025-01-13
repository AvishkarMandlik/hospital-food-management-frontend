import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import api from '../services/api';

const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      const response = await api.get('/deliveries');
      setDeliveries(response.data);
    };
    fetchDeliveries();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Delivery List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Meal Box</th>
            <th>Delivery Personnel</th>
            <th>Status</th>
            <th>Timestamp</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery._id}>
              <td>{delivery.mealBox}</td>
              <td>{delivery.deliveryPersonnel}</td>
              <td>{delivery.status}</td>
              <td>{delivery.timestamp}</td>
              <td>{delivery.notes}</td>
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

export default DeliveryList;
