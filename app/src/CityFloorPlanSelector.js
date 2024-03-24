import React, { useState } from 'react';


const CityFloorPlanSelector = () => {
  // State for the selected city and floor plan
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedFloorPlan, setSelectedFloorPlan] = useState('');

  // Dummy data for cities and floor plans
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const floorPlans = ['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'];

  // Handler for saving the selected options
  const handleSave = () => {
    alert(`Saved! City: ${selectedCity}, Floor Plan: ${selectedFloorPlan}`);
  };

  return (
    <div className="selector-container">
      <div className="dropdown">
        <label className="dropdown-label">City</label>
        <select className="styled-select" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select</option>
            {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
                ))}
        </select>
      </div>

      <div className="dropdown">
        <label className="dropdown-label">Floor Plan</label>
        <select className="styled-select" value={selectedFloorPlan} onChange={(e) => setSelectedFloorPlan(e.target.value)}>
          <option value="">Select </option>
            {floorPlans.map((plan) => (
                <option key={plan} value={plan}>{plan}</option>
            ))}
        </select>
      </div>
    <div className='button-container'>
        <button className="save-button">Save!</button>
    </div>
    </div>
  );

};

export default CityFloorPlanSelector;