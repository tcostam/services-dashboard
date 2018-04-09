import React, { Component } from 'react';
import ServiceCard from './components/ServiceCard';
import logo from './image/logo.png';
import axios from 'axios';
import services from './services.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {services };
  }

  componentDidMount() {
      setInterval(() => {
        services.forEach(function(service, index) {
          axios.get(service.health_check_url)
            .then(response => {
              if (response && response.status == "200") {
                services[index].status = "up";
              } else {
                services[index].status = "down";
              }
            })
            .catch(error => {
              services[index].status = "down";
            });
        })

        this.setState(() => {
            console.log("setting state")
            return { services }
        });
      }, 3000);
  }

  render() {
    var serviceElements = this.state.services.map(function(service) {
      return <ServiceCard key={service.name} status={service.status} title={service.name} message={service.message} />;
    });

    return (
      <div className="app">
        <header className="sd-header">
          <div className="sd-logo">
            <div className="image">
              <img src={logo}></img>
            </div>
            <div className="title">Services Dashboard</div>
          </div>
        </header>

        <div className="app-content">
          <div className="dashboard">
            <div className="services-column">
              {serviceElements}
            </div>
            <div className="logs-column">
                {this.state.services[0].status}
                {this.state.services[1].status}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
