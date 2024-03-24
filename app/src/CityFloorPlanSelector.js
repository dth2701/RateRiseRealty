import React, { useState, useEffect } from 'react';
import BarChartUI from './chart-and-chatbot/chart-switching/BarChartUI'; 

const CityFloorPlanSelector = ({ onSave }) => {
  // State for the selected city and floor plan
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedFloorPlan, setSelectedFloorPlan] = useState('');
  const [dataSet, setDataSet] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      import(`../JSON_file/${selectedCity}.json`) 
        .then(data => {
          setDataSet(data.default);
        })
        .catch(error => console.error("Failed to load city data", error));
    }
  }, [selectedCity]);  

  const cities = ['Austin', 'Dallas', 'FortWorth', 'Houston', 'SanAntonio'];
  const floorPlans = ['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms'];

  // Updated handler to call onSave prop with selectedCity
  const handleSave = () => {
    onSave(selectedCity); // Pass the selectedCity to the callback
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
      <button className="save-button" onClick={handleSave}>Save!</button>
    </div>
    {dataSet && <BarChartUI dataSet={dataSet} />}
    </div>
  );

};

export default CityFloorPlanSelector;
