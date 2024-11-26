import React from "react";
import './index.css';
import message from '../../assets/message.png';
import cross from '../../assets/x.png';

const ChatBox = ({ customization }) => {
  const chatboxStyles = {
    borderColor: customization.borderColor,
    borderRadius: customization.borderRadius,
    fontFamily: customization.font
  }

  const chatboxTitleStyles = {
    backgroundColor: customization.chatboxTitleBgColor
  }

  const botBubbleStyles = {
    backgroundColor: customization.botBubbleBgColor,
    color: customization.botTextColor
  }

  const userBubbleStyles = {
    backgroundColor: customization.userBubbleBgColor,
    color: customization.userTextColor
  }

  return (
    <div className="chatbox" style={chatboxStyles}>
      <div className="chat-head" style={chatboxTitleStyles}>
        <img src={message} alt="message_img" width='40px' height='40px' style={{borderRadius: '100%'}}></img>
        <div className="chat-tit-div">
          <p className="chat-tit-para">Jinn Live<br/>Demo Bot</p>
        </div>
        <img width='15px' height='15px' className="chat-cross" src={cross} alt="cross.png"></img>
      </div>
      <div className="chat-window">
        <div className="user-message" style={userBubbleStyles}>
          <p className="user-message-para">Hello Jinn</p>
        </div>
        <div className="bot-message-div">
          <img src={message} alt="message_img" width='25px' height='25px' style={{borderRadius: '100%'}}></img>
          <div className="bot-message" style={botBubbleStyles}>
            <p className="bot-message-para">Hello Anurag! How can i help you today?</p>
          </div>
        </div>
      </div>
      <div className="chat-inp-div">
        <input className="chat-inp" placeholder="Ask us anything..." disabled></input>
        <p className="chat-btn">{customization.buttonIcon}</p>
      </div>
    </div>
  );
};

export default ChatBox;
