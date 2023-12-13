import React, { useState } from 'react';
import './style.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Kalender from './Components/Kalender';

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< Updated upstream
      <Kalender/>
=======
      <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1}`}>Rubrik 1</h1>
      <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}>Rubrik 2</h2>
      <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3}`}>Rubrik 3</h3>
      <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Rubrik 4</h4>
      <p className={`${styles.openSans} ${styles.p}`}>Brödtext</p>
      {/* ... Andra rubrik-element med olika typsnitt, vikter och storlekar */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
