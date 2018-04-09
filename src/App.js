import React, { Component } from 'react';
import ServiceCard from './components/ServiceCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="sd-header">
          <div className="sd-logo">
            <div className="image">
              <img src="/image/logo.png"></img>
            </div>
            <div className="title">Services Dashboard</div>
          </div>
        </header>

        <div className="app-content">
          <div className="dashboard">
            <div className="services-column">
              <ServiceCard status="down" title="TFSports Site" />
              <ServiceCard status="up" title="TFSports API"/>
              <ServiceCard status="up" title="Peggou API" />
            </div>
            <div className="logs-column">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
