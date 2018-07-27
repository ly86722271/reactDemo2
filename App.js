import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WeatherChannel from './components/WeatherChannel';

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