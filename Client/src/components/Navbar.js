import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">Hospital Food Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/inner-pantry-dashboard" className="nav-link">
            InnerPantryDashboard
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/add-patient" className="nav-link">
              Add Patient
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/diet-charts" className="nav-link">
              Diet Charts
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/add-diet-chart" className="nav-link">
              Add Diet Chart
            </Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Link to="/deliveries" className="nav-link">
              Deliveries
            </Link>
          </Nav.Item> */}
          <Nav.Item>
            <Link to="/add-delivery" className="nav-link">
              Add Delivery
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
