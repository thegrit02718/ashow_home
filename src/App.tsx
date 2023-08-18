import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AshowMain from './Ashow/AshowMain';

function App() {
  
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<AshowMain></AshowMain>}/>
      </Routes>

    </div>
  );
}

export default App;
