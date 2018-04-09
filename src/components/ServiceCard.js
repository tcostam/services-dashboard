import React, { Component } from 'react';
import { ChevronsUp } from 'react-feather';
import { ChevronsDown } from 'react-feather';

class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = { props };
  }

  render() {
    console.log(this.state.props);
    var divStylesCircle = { backgroundColor: "#e11925" };
    var divStylesCard = { backgroundColor: "#ab3036" };
    var icon = <ChevronsDown color="white" size={27} />;

    if (this.state.props.status === "up") {
      divStylesCircle = { backgroundColor: "#51ce8e" };
      divStylesCard = { backgroundColor: "#489b71" };
      icon = <ChevronsUp color="white" size={27} />;
    }

    return (
      <div className="service-card" style={divStylesCard}>
        <div className="icon">
          <div className="circle" style={divStylesCircle}>
            {icon}
          </div>
        </div>
        <div className="info">
          <div className="title">{this.state.props.title}</div>
          <div className="text">{this.state.props.message}</div>
        </div>
      </div>
    );
  }
};

export default ServiceCard;
