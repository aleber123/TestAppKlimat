import React, { useState } from 'react';
import './style.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Kalender from './Components/Kalender';

function App() {
  return (
    <div className="App">
      <Header />
      <Kalender/>
    </div>
  );
}

export default App;
