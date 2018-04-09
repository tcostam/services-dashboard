import React from 'react';
import { ChevronsUp } from 'react-feather';
import { ChevronsDown } from 'react-feather';

const ServiceCard = (props) => {
  var divStylesCircle = { backgroundColor: "#e11925" };
  var divStylesCard = { backgroundColor: "#ab3036" };
  var icon = <ChevronsDown color="white" size={27} />;

  if (props.status === "up") {
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
        <div className="title">{props.title}</div>
        <div className="text">Unhealthy for 45 min</div>
      </div>
    </div>
  )
};

export default ServiceCard;
