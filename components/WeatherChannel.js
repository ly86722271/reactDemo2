import React, { Component } from 'react';

// Presentational components for the left and right part of weather display
// WeatherChannel serves container component to pass data state via props needed by
// those presentational components
import CityCondition from './CityCondition';
import Forecast from './Forecaster';

// Toolbar is also presentational component that provide UI for interaction
// like input city, change unit/days etc
// it is controlled by WeatherChannel ui state (curCity, unit, numOfDays)
// also invoke callback (e.g onCityChange, onUnitChange) when some interaction happens
// This is typical pattern for parent-children communication
import Toolbar from './Toolbar';

import { fetchConditionData, fetchForecast } from '../api/Weather';

export default class WeatherChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCity: 'melbourne',
      unit: 'C',
      numOfDays: 10,
      conditionData: {},
      forecastData: [],
    };
  }

  componentDidMount() {
    const { curCity } = this.state;
    fetchConditionData(curCity)
      .then(data => this.onCityConditionLoad(data))
      .catch(error => {
        alert(error.message);
      });

    fetchForecast(curCity).then(data => {
      // console.log(forecast);
      this.onForecastLoad(data);
    });
  }

  // The next two methods used as callback when response come back from api
  // it extract data that presentational component need from response
  // setState with needed data to trigger re-rendering
  onCityConditionLoad(data) {
    const conditionData = {
      city: data.display_location.full,
      weather: data.weather,
      temp: { C: data.temp_c, F: data.temp_f },
    };
    this.setState({ conditionData });
  }
  onForecastLoad(data) {
    const forecastData = data.map(item => {
      return {
        key: item.date.epoch,
        weekday: item.date.weekday_short,
        high: { C: item.high.celsius, F: item.high.fahrenheit },
        low: { C: item.low.celsius, F: item.low.fahrenheit },
        icon_url: item.icon_url,
      };
    });
    this.setState({ forecastData });
  }

  onCitySubmit() {
    const { curCity } = this.state;
    fetchConditionData(curCity)
      .then(data => this.onCityConditionLoad(data))
      .catch(error => {
        alert(error.message);
      });

    fetchForecast(curCity)
      .then(data => {
        this.onForecastLoad(data);
      })
      .catch(error => alert(error.message));
  }

  render() {
    // destruct ui state (curCity we search and temp unit we selected)
    // those are state controlling Toolbar, see below how we pass via props
    const { curCity, unit, numOfDays } = this.state;

    // destruct data state to be used in left and right presentational components
    // Look how nested object (conditionData) get destructed
    const { conditionData: { city, weather, temp }, forecastData } = this.state;
    return (
      <main>
        <Toolbar
          curCity={curCity}
          unit={unit}
          numOfDays={numOfDays}
          onCityChange={e => this.setState({ curCity: e.target.value })}
          onCitySubmit={() => this.onCitySubmit()}
          onUnitChange={unit => {
            this.setState({ unit });
          }}
          onDaysChange={numOfDays => this.setState({ numOfDays })}
        />
        <section id="left">
          <CityCondition city={city} weather={weather} temp={temp} unit={unit} />
        </section>
        <section id="right">
          <Forecast days={forecastData} unit={unit} numOfDays={numOfDays} />
        </section>
      </main>
    );
  }
}