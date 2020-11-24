import React from "react";

import { ReactComponent as FundfinderIcon } from "../../Fundfinder.svg";

const FundfinderAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <FundfinderIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default FundfinderAvatar;