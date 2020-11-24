
import React from "react";

import "../choice.css";

const Additional = (props) => {
  const options = [
    { text: "I get it!", handler: props.actionProvider.push.whereInvesting, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Additional;

