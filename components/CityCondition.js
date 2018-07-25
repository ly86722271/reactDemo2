import React from 'react';

export default function CityCondition(props) {
  const { city, weather, temp, unit } = props;
  if (!city) return null;
  return (
    <div>
      <div id="location">{city}</div>
      <div id="weather">{weather}</div>
      <div id="temperature">{`${temp[unit]} ${unit.toLowerCase()}`}</div>
    </div>
  );
}