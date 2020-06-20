import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Avatar from './components/Avatar';
import LearningExperience from './components/LearningExperience';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className='containerForAll'>
      <Avatar />
      {/* <LearningExperience />
      <Hobbies /> */}
    </div>
  );
}

export default App;
