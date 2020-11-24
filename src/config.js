// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

import FundfinderAvatar from "./components/Avatar/Avatar";

import WelcomeUser from "./components/Welcome/Welcome";
import Additional from "./components/AdditionalInfos/Additional";
import WhatPurpose from "./components/WhatPurpose/WhatPurpose";
import NearestBank from "./components/NearestBank/NearestBank";
import AmountOfMoney from "./components/AmountOfMoney/AmountOfMoney";

import Schedule from "./components/Schedule/Schedule";
import NearestBankNlp from "./components/NearestBankNlp/NearestBank";

const welcomeMessage = "Hi, I am Fundfinder, your personal assistant. I will help you with your next loan. Feel free to ask any question";

const config = { 
  botName: "Fundfinder",
  initialMessages: [createChatBotMessage(welcomeMessage, {
    widget: "welcomeUser",
  }
  )
  ],
  state: {
    purpose: "",
    bank: "",
    money: "",
    nlp: "",
  },
  customComponents: {
    botAvatar: (props) => <FundfinderAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(0,0,73)",
    },
    chatButton: {
      backgroundColor: "#ffce00",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "welcomeUser",
     widgetFunc: (props) => <WelcomeUser {...props} />,
    },
    {
      widgetName: "additionalInfo",
     widgetFunc: (props) => <Additional {...props} />,
    },
    {
      widgetName: "whatPurpose",
     widgetFunc: (props) => <WhatPurpose {...props} />,
     mapStateToProps: ["purpose"],
    },
    {
      widgetName: "nearestBank",
     widgetFunc: (props) => <NearestBank {...props} />,
    },
    {
      widgetName: "amountOfMoney",
     widgetFunc: (props) => <AmountOfMoney {...props} />,
    },
    {
      widgetName: "schedule",
     widgetFunc: (props) => <Schedule {...props} />,
    },
    {
      widgetName: "nearestBankNlp",
     widgetFunc: (props) => <NearestBankNlp {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
}

export default config
