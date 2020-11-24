
import React from "react";

import "./NearestBank.css";



const NearestBank = (props) => {// eslint-disable-next-line
  const options = [
    { text: "Townhall Agency", handler: props.actionProvider.push.amoutOfMoney, id: 1 },
    { text: "Park Agency", handler: props.actionProvider.push.amoutOfMoney, id: 2 },
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




export default NearestBank;

