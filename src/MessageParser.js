class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.length >= 2){
      this.actionProvider.disabledNlp();
      this.actionProvider.nlp(lowerCaseMessage);
    }

    else{
      this.actionProvider.bad();
    }


  }
}

export default MessageParser;
