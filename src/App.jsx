import React, { useState } from "react";
import Customize from "./components/Customize";
import ChatBox from "./components/ChatBox";
import "./App.css";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "➤",
    borderColor: "#2395F0",
    borderRadius: "10px",
    chatboxTitleBgColor: "#000000",
    botBubbleBgColor: "#E5E7EB",
    botTextColor: "#000000",
    userBubbleBgColor: "#000000",
    userTextColor: "#FFFFFF",
    font: "Arial",
  })

  return (
    <div className="app">
      <Customize customization={customization} setCustomization={setCustomization} />
      <ChatBox customization={customization} />
    </div>
  )
}

export default App;
