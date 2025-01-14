// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import HospitalFoodManagerDashboard from './components/HospitalFoodManagerDashboard';
import InnerPantryDashboard from './components/InnerPantryDashboard';
import DietChartForm from './components/DietChartForm';
import DietChartList from './components/DietChartList';
import DeliveryForm from './components/DeliveryForm';
import DeliveryList from './components/DeliveryList';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<PatientList />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/add-patient" element={<PatientForm />} />
            <Route path="/diet-charts" element={<DietChartList />} />
            <Route path="/add-diet-chart" element={<DietChartForm />} />
            <Route path="/deliveries" element={<DeliveryList />} />
            <Route path="/add-delivery" element={<DeliveryForm />} />
            <Route path="/hospital-food-manager-dashboard" element={<HospitalFoodManagerDashboard />} />
            <Route path="/inner-pantry-dashboard" element={<InnerPantryDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
