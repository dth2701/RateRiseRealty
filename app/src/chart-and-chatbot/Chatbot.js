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

  // crime rate
  {
    id: '10',
    message: 'The crime rate at New York is since December 2022 - December 2023 Overall index crime dropped by 409 incidents, or deacreasing 0.3% (126678 vs. 127087) citywide, compared to 2023.(Source: https://www.nyc.gov/site/nypd/news/p00098/nypd-december-2023-end-of-year-citywide-crime-statistics)',
    trigger: '9',
  },
  {
    id: '12',
    message: 'The crime rate overall at Los Angeles Violent decreased more than 3% in 2023(Source:https://apnews.com/article/los-angeles-crime-police-5ec43ae9f02acfd01ce2b21cb387f3b9)',
    trigger: '9',
  },
  {
    id: '13',
    message: 'The crime rate at Chicago is 12.9% decreasing in homicides in comparison to 2022(Source:https://www.fox32chicago.com/news/chicago-crime-2023-police)',
    trigger: '9',
  },
  {
    id: '14',
    message: 'The crime rate at Houston is down to 12% compared to last year, but property crimes have increased.(Source:https://www.houstonpublicmedia.org/articles/news/local/2023/05/03/450739/report-violent-crime-in-houston-down-12-compared-to-last-year-but-property-crimes-have-increased)',
    trigger: '9',
  },
  {
    id: '15',
    message: 'The crime rate is down by 2% in Phoenix so far in 2023, according to police crime report.(Source:https://www.fox10phoenix.com/news/overall-crime-down-by-2-in-phoenix-so-far-in-2023-according-to-police-crime-report)',
    trigger: '9',
  },

  // crime rate end
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

  // mall nearby

  {
    id: '16',
    message: 'There are atleast 10 Best Mall in New York City. Some of them are: 1. Brookfield Place 2. Westfield World Trade Center 3. The Shops & Restaurants at Hudson Yards(Source: https://www.tripadvisor.com/Attractions-g60763-Activities-c26-t143-New_York_City_New_York.html)',
    trigger: '9',
  },
  {
    id: '17',
    message: 'There are atleast 10 Best Mall in Los Angeles. Some of them are: 1. Citadel Outlets 2. Universal CityWalk Hollywood 3. Beverly Center(Source: https://www.tripadvisor.com/Attractions-g32655-Activities-c26-t143-Los_Angeles_California.html)',
    trigger: '9',
  },
  {
    id: '18',
    message: 'There are 329 shopping malls in Chicago. The most famous is The Magnificent Mile, (Source:https://www.ncesc.com/geographic-faq/what-is-the-biggest-mall-in-chicago/)',
    trigger: '9',
  },
  {
    id: '19',
    message: 'There are atleast 10 Best Mall in Houston. Some of them are: 1. The Galleria 2. Memorial City (Source: https://www.tripadvisor.com/Attractions-g56003-Activities-c26-t143-Houston_Texas.html)',
    trigger: '9',
  },
  {
    id: '20',
    message: 'There are atleast 10 Best Mall in Phoenix. Some of them are: 1. The Acropolis Mall 2. Deer Valley Towne Center (Source:https://trip101.com/article/shopping-malls-in-phoenix) ',
    trigger: '9',
  },

  // mall nearby end

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

  // school nearby

  {
    id: '21',
    message: 'There are 4,413 public schools and 356 charter schools in New York State(Source:https://data.nysed.gov/index.php)',
    trigger: '9',
  },
  {
    id: '22',
    message: 'There are 592 public schools and 258 private schools in Los Angeles.(Source:https://www.publicschoolreview.com/california/los-angeles)',
    trigger: '9',
  },
  {
    id: '23',
    message: 'There are 634 Number of schools, including district-run, charter, contract, and SAFE schools in Chicago.(Source:https://www.cps.edu/about/stats-facts/)',
    trigger: '9',
  },
  {
    id: '24',
    message: 'There are 274 public schools serving 194,607 students in Houston ISD School District.(Source:https://www.publicschoolreview.com/texas/houston-isd-school-district/4823640-school-district)',
    trigger: '9',
  },
  {
    id: '25',
    message: 'There are 483 public schools nearby Phoenix.(Source:https://www.publicschoolreview.com/arizona/phoenix) ',
    trigger: '9',
  },

  // school nearby end
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

  // how far your (choosen) city to another city
  {
    id: '26',
    message: '1. New York to Los Angeles (4501 KM), 2. New York to Chicago (1269 km), 3. New York to Houston (2284 KM), 4. New York to Phoenix (3 872 km).',
    trigger: '9',
  },
  {
    id: '27',
    message: '1. Los Angeles to New York (4501 KM), 2. Los Angeles to Chicago (3244 KM), 3. Los Angeles to Houston (2490 KM), 4. Los Angeles to Phoenix (600 KM).',
    trigger: '9',
  },
  {
    id: '28',
    message: '1. Chicago to New York (1269 KM), 2. Chicago to Los Angeles (3244 KM), 3. Chicago to Houston (1744 KM), 4. Chicago to Phoenix (2819 KM).',
    trigger: '9',
  },
  {
    id: '29',
    message: '1. Houston to New York(2284 KM), 2. Houston to Chicago (1744 KM), 3. Houston to Los Angeles (2490 KM), 4. Houston to Phoenix (1889 KM).',
    trigger: '9',
  },
  {
    id: '30',
    message: '1. Phoenix to New York (3 872 KM), 2. Phoenix to Chicago (2819 KM), 3. Phoenix to Los Angeles (600 KM), 4. Phoenix to Houston (1889 KM).',
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
      headerTitle="RateRiseRealty ChatBox"
      steps={steps}
      {...config}

    />
  );
};

export default Chatbot;
