import React, { useState } from 'react';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import uniqid from 'uniqid';
import Education from './components/Education'
import Experience from './components/Experience'
import General from './components/General'
import './App.css';

const App = () => {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleClick = (type) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
    } else {
      setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => {
        let newList = prevExpIds.filter((key) => key !== id);
        return newList;
      });
    } else {
      setEducationIds((prevEduIds) => {
        let newList = prevEduIds.filter((key) => key !== id);
        return newList;
      });
    }
  };

  const eduComponents = educationIds.map((id) => (
    <Education key={id} id={id} handleDelete={handleDelete} />
  ));
  const expComponents = experienceIds.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <div>
      <PrintProvider>
        <NoPrint>
          <main>
            <h1 className='title'>CV-App with React</h1>
            <Print>
              <h2 className='sub-title'>General Info</h2>
              <General />
            </Print>
            <div>
              <Print>
                <h2 className='sub-title'>Education</h2>
                {eduComponents}
              </Print>
              <button
                className='add-btn'
                onClick={() => handleClick('educationIds')}>
                Add
              </button>
            </div>
            <div>
              <Print>
                <h2 className='sub-title'>Experience</h2>
                {expComponents}
              </Print>
              <button
                className='add-btn'
                onClick={() => handleClick('experienceIds')}>
                Add
              </button>
            </div>
            <button
              onClick={() => {
                window.print();
              }}
              className='add-btn'>
              Print
            </button>
          </main>
        </NoPrint>
      </PrintProvider>
    </div>
  );
};

export default App;
