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
      { value: '1', label: 'Want to know about crime rate?', trigger: '6' },
      { value: '2', label: 'Any malls nearby this', trigger: '7' },
      { value: '3', label: 'Schools nearby this', trigger: '2' },
      { value: '4', label: 'How far is this (city1) from (city2)?', trigger: '2' },
    ],
  },
  {
    id: '6',
    options: [
      { value: '1', label: 'Jakarta', trigger: '10' },
      { value: '2', label: 'New York', trigger: '7' },
    ],
  },
  {
    id: '10',
    message: 'The crime rate at Jakarta is 60% last year',
    trigger: '9',
  },
  {
    id: '9',
    message: 'Do you want to ask again?',
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: '1', label: 'Yes', trigger: '5' },
      { value: '2', label: 'No', trigger: '8' },
    ],
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
