import React, { useState } from 'react';

const CityFloorPlanSelector = ({ switchData, updateSelectedIndex  }) => {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = ['Austin', 'Dallas', 'Fort Worth', 'Houston', 'San Antonio'];

  const handleCityChange = (city, index) => {
    setSelectedCity(city);
    updateSelectedIndex(index);
  };

  return (
    <div className="selector-container">
      <div className="dropdown">
        <label className="dropdown-label">City</label>
        <select className="styled-select" value={selectedCity} onChange={(e) => handleCityChange(e.target.value, e.target.selectedIndex)}>
          <option value="">Select</option>
          {cities.map((city, index) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CityFloorPlanSelector;
