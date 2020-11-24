
import React from "react";

import "./NearestBank.css";



const NearestBankNlp = (props) => {// eslint-disable-next-line
  const options = [
    { text: "Center Agency, 345 m", handler: props.actionProvider.nlp, id: 1 },
    { text: "Park Agency, 1.2 km", handler: props.actionProvider.nlp, id: 2 },
  ];

  const linkMarkup = options.map((option) => (
    
    <li key={option.id} 
    className="link-list-item"
    onClick={option.handler}>
      <p>
        {option.text}
      </p>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};




export default NearestBankNlp;

