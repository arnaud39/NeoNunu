
import React from "react";

import "./WhatPurpose.css";


const WhatPurpose = (props) => {

  const options = [
    { text: "Personal purpose", handler: () => setPurpose("Personal purpose"), id: 1 },
    { text: "Professional project", handler: () => setPurpose("Professional project"), id: 2 },
    { text: "Other", handler: () => setPurpose("Other"), id: 3 },
  ];


  const setPurpose = async (purposeSelected) => {
    const { setState } = props;
    setState((state) => ({
      ...state,
      purpose: purposeSelected,
    }));
    
    props.actionProvider.push.nearestBank(purposeSelected);
  };



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

export default WhatPurpose;

