import $ from "jquery";
import Schedule from "./components/Schedule/Schedule";
let nlllp = 0;
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.messageList = {
      additionalInfo: "I am designed to help humans.",
      whatPurpose: "Great, friend. For which purpose would you like to take out a loan?",
      nearestBank: "According to my data, you are at a short distance away these banks.",
      nearestBankNext: "With whom would you like to get in touch afterwards ?",
      amoutOfMoney: "Amazing ! Now, let's go down to business. Can you tell me how much money you need?",
      tooLow: "Considering your needs, I can redirect you to an instant loan offer.",
      socialConnect: "I need to gather some infos. To faster the process, you can connect with these social media. I'll get the information I need if you agree",
      errorSocialConnect: "I am sorry, there was an error. Could you connect again ?",
      sucessCheck: "It is all good! Let's check together that the information I've retrieved is the right one.",


    }
    this.nlpState = 0;

    this.widgetList = {
      additionalInfo: "additionalInfo",
      whatPurpose: "whatPurpose",
      nearestBank: "nearestBank",
      nearestBankNext: "nearestBankNext",
      amoutOfMoney: "amoutOfMoney",
      tooLow: "tooLow",
      socialConnect: "socialConnect",
      errorSocialConnect: "errorSocialConnect",
      sucessCheck: "sucessCheck",
    }

    this.push = {};
    for (var key in this.messageList) {
      this.push[key] = this.mapFunction(key, this.messageList[key]);
    }

    this.push["whatPurpose"] = () => {
      let greetingMessage;

      const clientMessage = this.createClientMessage("Hi Fundfinder !");
      greetingMessage = this.createChatBotMessage(this.messageList.whatPurpose, {
        widget: this.widgetList["whatPurpose"],
        withAvatar: false,
      });
      $('.options-container').remove();
      this.updateChatbotState(clientMessage);

      this.updateChatbotState(greetingMessage);


    };

    this.push["nearestBank"] = (purposeSelected) => {
      
      
      const clientMessage = this.createClientMessage(purposeSelected);
      let greetingMessage = this.createChatBotMessage(this.messageList.nearestBank, {
        widget: this.widgetList["nearestBank"],
        withAvatar: false,
      });
      $('.options-container').remove();
      this.updateChatbotState(clientMessage);

      this.updateChatbotState(greetingMessage);
      const greetingMessage2 = this.createChatBotMessage(this.messageList.nearestBankNext);
      this.updateChatbotState(greetingMessage2);


    };

  }


  mapFunction = (key, el) => () => {
    //retrieve widget name
    let greetingMessage;
    if (this.widgetList[key]) {
      greetingMessage = this.createChatBotMessage(el, {
        widget: this.widgetList[key],
      });
    } else {
      greetingMessage = this.createChatBotMessage(el);
    }
    this.updateChatbotState(greetingMessage);
  }

 
   

  nlp = (incomingMessage) => {

    const messageNlpListOld = [
      "0I am parsing your message with latest natural language processing methods. Please be patient durint next milliseconds.",
      "0Here is what I have understood and found on your phone. You are Mr Tronchi, 22 yearsold living in Paris. You are asking for 3.2k€ to finish a personal project. Repay would start by default in two years as you did not specified it.",
      "Are these infos correct ?",
      "Fine. I set it in three years and 6 months so. We can offer you the following : 3.2k€ loan, annual interest rate 1.2%, with payback period starting in 3 years. Are you ok with this ?",
      "I understand. I will specify in your customer file this request. Here are the nearest banks to you. With whom would you like to get in touch afterwards ?",
      "Awesome, Simon. Mr PETIT will take charge of your file. I am transmiting to him the information you have provided me with. When would you like to meet him?",
      "Okay, Simon ! You can follow this request in {Me & Sparkasse -> Requests}. For now, nothing else is required."
    ];

    const messageNlpListOld2 = [
      "0I am parsing your message with a neural engine system. I will be as fast as possible.",
      "0Here is what I have understood and found on your phone. You are Mr Scott, a paris-based sudent living in Paris, 23. You are asking for 1.2k€ for a professional project. Repay would start by default in two years as you did not specified it.",
      "Are these infos correct ? Would you like to change something ?",
      "Fine. I set it to one year. We can offer you the following : 1.2k€ loan, annual interest rate 1.6%, with payback period starting in one years. Are you ok with this ?",
      "Great ! Here are the nearest banks to you. With whom would you like to get in touch afterwards ?",
      "Awesome, Armand. Mr DUHEN will take charge of your file. I am transmiting to him the information you have provided me with. When would you like to meet him?",
      "Okay, Armand ! You can follow this request in {Me & Sparkasse -> Requests}. For now, nothing else is required."
    ];

    const messageNlpList = [
      "0I am parsing your message with a neural engine system. I will be as fast as possible.",
      "Here is what I have understood and found on your phone. You are Mr Adam. You are asking for 62€ for a personal project. Your settings did not allowed me to locate you. Could you tell your adress please ?",
      "Okay, good. Are the other infos correct ?",
      "Fine. Unfortunatly, your request did not match our offers. I will redirect you to another service more appropriate for your needs",
      "Great ! Here are the nearest banks to you. With whom would you like to get in touch afterwards ?",
      "Awesome, Armand. Mr DUHEN will take charge of your file. I am transmiting to him the information you have provided me with. When would you like to meet him?",
      "Okay, Armand ! You can follow this request in {Me & Sparkasse -> Requests}. For now, nothing else is required."
    ];

    let message = messageNlpList[nlllp];
    if (message) {
      while (message[0] === "0") {
        let mst;
        if (nlllp ==1){
          mst = this.createChatBotMessage(messageNlpList[nlllp].slice(1), {
            loading: true,
            delay: 1200,

          });
        }
        else{
          mst = this.createChatBotMessage(messageNlpList[nlllp].slice(1), {
            loading: true
          });
        }

        


        message = messageNlpList[++nlllp];
        this.updateChatbotState(mst);

      }

      if (nlllp === 4) {
        var mst = this.createChatBotMessage(messageNlpList[nlllp], {
          loading: true,
          widget: "nearestBankNlp",
        });
      } 
      else if (nlllp ===5){
        var mst = this.createChatBotMessage(messageNlpList[nlllp], {
          loading: true,
          widget: "schedule",
        });
      }
      
      else {
        var mst = this.createChatBotMessage(messageNlpList[nlllp], {
          loading: true,
        });
      }

      if (nlllp ===6){
        $('.react-chatbot-kit-chat-input-form').remove(); 
      }

      message = messageNlpList[++nlllp];
      this.updateChatbotState(mst);

    }
  }
  bad = () => {
    const mst = this.createChatBotMessage("Sorry, I am not sure about what you have said. Could you write again ?");
    this.updateChatbotState(mst);
  }
  disabledNlp = () => {
    const mst = this.createChatBotMessage("Natural language processing mod has been disabled for this demo.");
    this.updateChatbotState(mst);

  }

  test() {
    const mst = this.createChatBotMessage(this.messageList.nearestBank, {
      widget: "learningOptions",
      withAvatar: false,
    });
    this.updateChatbotState(mst);
  }
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Javascript:", {
        widget: "javascriptLinks",
      });
    $('.test2').remove();


    this.updateChatbotState(message);
  };

  chooseInvestment() {
    const choiceMessage = this.createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    });
    this.updateChatbotState(choiceMessage);

  }

  updateChatbotState(message) {

    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }

}

export default ActionProvider;