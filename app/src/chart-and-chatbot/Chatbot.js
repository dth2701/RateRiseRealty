import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '1',
    message: 'Hello, how can I assist you today?',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Please enter your name.',
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    trigger: '4',
  },
  {
    id: '4',
    message: 'Hi {previousValue}, nice to meet you. How can I assist you today?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: '1', label: 'Yes', trigger: '6' },
      { value: '2', label: 'No', trigger: '7' },
    ],
  },
  {
    id: '6',
    message: 'Great, let me know what you need and I will do my best to help.',
    trigger: '8',
  },
  {
    id: '7',
    message: 'Okay, see you next time.',
    end: true,
  },
  {
    id: '8',
    message: 'Thank you for your time. Have a nice day!',
    end: true,
  },
];

const Chatbot = () => {
  return (
    <ChatBot
      steps={steps}
    />
  );
};

export default Chatbot;
