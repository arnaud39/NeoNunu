
import React from "react";

import "./Schedule.css";



const Schedule = (props) => {// eslint-disable-next-line
  const options = [
    { text: "Nov.23 Monday 9 a.m.", handler: props.actionProvider.nlp, id: 1 },
    { text: "Nov.26 Thursday  17 p.m.", handler: props.actionProvider.nlp, id: 2 },
    { text: "Show more", handler: props.actionProvider.nlp, id: 3 },
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




export default Schedule;

