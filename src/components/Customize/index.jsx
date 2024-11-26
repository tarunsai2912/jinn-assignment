import React from "react";
import './index.css';

const Customize = ({ customization, setCustomization }) => {
  const handleChange = (e) => {
    setCustomization({
      ...customization, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="custom">
      <h2 className="custom-head">Customize Chatbox</h2>
      <div className="custom-icon-div">
        <label className="custom-icon-head">Button Icon:</label>
        <select className="custom-icon-inp" name="buttonIcon" value={customization.buttonIcon} onChange={handleChange}>
          <option value="💬">💬</option>
          <option value="➤">➤</option>
          <option value="⏏">⏏</option>
          <option value="➥">➥</option>
        </select>
      </div>
      <div className="custom-bcol-div">
        <label className="custom-bcol-head">Border Color:</label>
        <input
        className="custom-bcol-inp"
        type="color"
        name="borderColor"
        value={customization.borderColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-brad-div">
        <label className="custom-brad-head">Border Radius:</label>
        <input
        className="custom-brad-inp"
        type="text"
        name="borderRadius"
        value={customization.borderRadius}
        onChange={handleChange}
        />
      </div>
      <div className="custom-tit-div">
        <label className="custom-tit-head">Chatbox Title Background Color:</label>
        <input
        className="custom-tit-inp"
        type="color"
        name="chatboxTitleBgColor"
        value={customization.chatboxTitleBgColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-bgbot-div">
        <label className="custom-bgbot-head">Bot Bubble Background Color:</label>
        <input
        className="custom-bgbot-inp"
        type="color"
        name="botBubbleBgColor"
        value={customization.botBubbleBgColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-colbot-div">
        <label className="custom-colbot-head">Bot Text Color:</label>
        <input
        className="custom-colbot-inp"
        type="color"
        name="botTextColor"
        value={customization.botTextColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-bguser-div">
        <label className="custom-bguser-head">User Bubble Background Color:</label>
        <input
        className="custom-bguser-inp"
        type="color"
        name="userBubbleBgColor"
        value={customization.userBubbleBgColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-coluser-div">
        <label className="custom-coluser-head">User Text Color:</label>
        <input
        className="custom-coluser-inp"
        type="color"
        name="userTextColor"
        value={customization.userTextColor}
        onChange={handleChange}
        />
      </div>
      <div className="custom-font-div">
        <label className="custom-font-head">Font:</label>
        <select className="custom-font-inp" name="font" value={customization.font} onChange={handleChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Gill Sans">Gill Sans</option>
          <option value="Segoe UI">Segoe UI</option>
        </select>
      </div>
    </div>
  );
};

export default Customize;
