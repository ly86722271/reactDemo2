import React, { Component } from '../../../../Users/Peter/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';

export default function Toolbar({
  curCity,
  unit,
  numOfDays,
  onCityChange,
  onCitySubmit,
  onUnitChange,
  onDaysChange,
}) {
  return (
    <nav style={{ padding: 10 }}>
      <input value={curCity} onChange={onCityChange} />
      <button onClick={onCitySubmit}>Load</button>

      <label style={{ color: 'white', paddingLeft: 30 }}>
        <input
          type="radio"
          style={{ width: 'auto' }}
          checked={unit === 'C'}
          onChange={() => onUnitChange('C')}
        />
        C
      </label>
      <label style={{ color: 'white', paddingLeft: 10 }}>
        <input
          type="radio"
          style={{ width: 'auto' }}
          checked={unit === 'F'}
          onChange={() => onUnitChange('F')}
        />
        F
      </label>

      <label style={{ color: 'white', paddingLeft: 80 }}>
        <input
          type="radio"
          style={{ width: 'auto' }}
          checked={numOfDays === 5}
          onChange={() => onDaysChange(5)}
        />
        5 days
      </label>
      <label style={{ color: 'white', paddingLeft: 10 }}>
        <input
          type="radio"
          style={{ width: 'auto' }}
          checked={numOfDays === 10}
          onChange={() => onDaysChange(10)}
        />
        10 days
      </label>
    </nav>
  );
}