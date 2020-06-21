import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Avatar from './components/Avatar';
import LearningExperience from './components/LearningExperience';
import Hobbies from './components/Hobbies';
import LearningResources from './components/LearningResources';
import { useSelector } from 'react-redux';
import { selectLanguage } from './redux/languageSlice';
function App() {
  // const [themeBg, setthemeBg] = useState('light');
  const themeBg = useSelector(selectLanguage);
  return (
    <body className={themeBg}>
      <div className='containerForAll'>
        <Avatar />
        <LearningExperience />
        <LearningResources />
        {/* <Hobbies />  */}
      </div>
    </body>
  );
}

export default App;
