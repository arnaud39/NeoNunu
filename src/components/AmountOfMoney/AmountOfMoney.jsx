
import React from "react";

import "./AmountOfMoney.css";

const AmountOfMoney = (props) => {
  const options = [
    { text: "Hi Fundfinder !", handler: props.actionProvider.push.whatPurpose, id: 1 },
    { text: "Tell me more", handler: props.actionProvider.push.additionalInfo, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <input type="range" min="100" max="100" value="50" class="slider" id="myRange"></input>
  
  ));

  return <div className="welcome-options-container">{optionsMarkup}</div>;
};

export default AmountOfMoney;

