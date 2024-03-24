import React from 'react';
import ChatBot from 'react-simple-chatbot';

const config = {
  width: '400px',
  height: '500px',
  floating: true,
  opened: true, // Set opened to true to show the chatbot by default
};

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
      { value: '1', label: 'Crime rate?', trigger: '6' },
      { value: '2', label: 'Malls nearby?', trigger: '7' },
      { value: '3', label: 'Schools nearby?', trigger: '31' },
      { value: '4', label: 'How far your (choosen) city to another city?', trigger: '26' },
    ],
  },  
  {
    id: '6',
    options: [
      { value: '1', label: 'New York', trigger: '10' },
      { value: '2', label: 'Los Angeles', trigger: '12' },
      { value: '3', label: 'Chicago', trigger: '13' },
      { value: '4', label: 'Houston', trigger: '14' },
      { value: '5', label: 'Phoenix', trigger: '15' },
    ],
  },
  {
    id: '10',
    message: 'The crime rate at New York is decreasing for 60% last year',
    trigger: '9',
  },
  {
    id: '12',
    message: 'The crime rate at Los Angeles is decreasing for 10% last year',
    trigger: '9',
  },
  {
    id: '13',
    message: 'The crime rate at Chicago is decreasing for 50% last year',
    trigger: '9',
  },
  {
    id: '14',
    message: 'The crime rate at Houston is decreasing for 90% last year',
    trigger: '9',
  },
  {
    id: '15',
    message: 'The crime rate at Phoenix is decreasing for 80% last year',
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
    options: [
      { value: '1', label: 'New York', trigger: '16' },
      { value: '2', label: 'Los Angeles', trigger: '17' },
      { value: '3', label: 'Chicago', trigger: '18' },
      { value: '4', label: 'Houston', trigger: '19' },
      { value: '5', label: 'Phoenix', trigger: '20' },
    ],
  },

  {
    id: '16',
    message: 'There are 3 mall nearby New York. 1. Mega City Mall, 2. United Square, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '17',
    message: 'There are 3 mall nearby Los Angeles. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '18',
    message: 'There are 3 mall nearby Chicago. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '19',
    message: 'There are 3 mall nearby Houston. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '20',
    message: 'There are 3 mall nearby Phoenix. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },

  {
    id: '31',
    options: [
      { value: '1', label: 'New York', trigger: '21' },
      { value: '2', label: 'Los Angeles', trigger: '22' },
      { value: '3', label: 'Chicago', trigger: '23' },
      { value: '4', label: 'Houston', trigger: '24' },
      { value: '5', label: 'Phoenix', trigger: '25' },
    ],
  },

  {
    id: '21',
    message: 'There are 4 School nearby New York. 1. Mega City Mall, 2. United Square, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '22',
    message: 'There are 3 School nearby Los Angeles. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '23',
    message: 'There are 3 School nearby Chicago. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '24',
    message: 'There are 3 School nearby Houston. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '25',
    message: 'There are 3 School nearby Phoenix. 1. Small City Mall, 2. Square Space Mall, 3. Wall Street.',
    trigger: '9',
  },
  {
    id: '26',
    options: [
      { value: '1', label: 'New York', trigger: '26' },
      { value: '2', label: 'Los Angeles', trigger: '27' },
      { value: '3', label: 'Chicago', trigger: '28' },
      { value: '4', label: 'Houston', trigger: '29' },
      { value: '5', label: 'Phoenix', trigger: '30' },
    ],
  },

  {
    id: '26',
    message: '1. New York to Los Angeles (4 mile / 3 hours ), 2. New York to Chicago (4 mile / 3 hours ), 3. New York to Houston (4 mile / 3 hours), 4. New York to Phoenix (4 mile / 3 hours).',
    trigger: '9',
  },
  {
    id: '27',
    message: '1. New York to Los Angeles (4 mile / 3 hours ), 2. New York to Chicago (4 mile / 3 hours ), 3. New York to Houston (4 mile / 3 hours), 4. New York to Phoenix (4 mile / 3 hours).',
    trigger: '9',
  },
  {
    id: '28',
    message: '1. New York to Los Angeles (4 mile / 3 hours ), 2. New York to Chicago (4 mile / 3 hours ), 3. New York to Houston (4 mile / 3 hours), 4. New York to Phoenix (4 mile / 3 hours).',
    trigger: '9',
  },
  {
    id: '29',
    message: '1. New York to Los Angeles (4 mile / 3 hours ), 2. New York to Chicago (4 mile / 3 hours ), 3. New York to Houston (4 mile / 3 hours), 4. New York to Phoenix (4 mile / 3 hours).',
    trigger: '9',
  },
  {
    id: '30',
    message: '1. New York to Los Angeles (4 mile / 3 hours ), 2. New York to Chicago (4 mile / 3 hours ), 3. New York to Houston (4 mile / 3 hours), 4. New York to Phoenix (4 mile / 3 hours).',
    trigger: '9',
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
      {...config}

    />
  );
};

export default Chatbot;
