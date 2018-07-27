import React from 'react';

function DailyItem({ day, unit }) {
  return (
    <div className="item">
      <span>{day.weekday}</span>
      <span>
        <img src={day.icon_url} />
      </span>
      <span>{day.high[unit]}</span>
      <span>{day.low[unit]}</span>
    </div>
  );
}

export default function Forecast({ days, unit, numOfDays }) {
  return days
    .slice(0, numOfDays)
    .map((day, i) => <DailyItem key={day.key} day={day} unit={unit} />);
}