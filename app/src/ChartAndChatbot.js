import React from 'react'
import ChartData from './chart-and-chatbot/ChartData'
import Chatbot from './chart-and-chatbot/Chatbot'
import './ChartAndChatbot.css'; // Import CSS file for styling

const ChartAndChatbot = () => {
  return (
    <div className="chartAndChatbotContainer">
      <ChartData />
      <Chatbot />
    </div>
  )
}

export default ChartAndChatbot