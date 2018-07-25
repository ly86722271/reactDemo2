import React, { Component } from '../../../Users/Peter/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import logo from './logo.svg';
import './Styles/App.css';

import Header from './Demo1/Header';
import Footer from './Demo1/Footer';
import WeatherChannel from './Demo1/WeatherChannel';

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}