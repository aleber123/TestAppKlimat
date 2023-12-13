import React from 'react';
import './style.css'; // Om du har en global stilfil för din applikation
import styles from './Fonts.module.css'; // Importera dina CSS-moduler för typsnitten
import Header from './Components/header'; // Importera Header-komponenten
import Kalender from './Components/kalender';
import AnmalaWorkshop from './Components/buttons/anmalaworkshop';


function App() {
  return (
    <div className="App">
      <Header />
      <Kalender/>
      <AnmalaWorkshop />
      <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1}`}>Rubrik 1</h1>
      <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}>Rubrik 2</h2>
      <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3}`}>Rubrik 3</h3>
      <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Rubrik 4</h4>
      <p className={`${styles.openSans} ${styles.p}`}>Brödtext</p>
      {/* ... Andra rubrik-element med olika typsnitt, vikter och storlekar */}
    </div>
  );
}

export default App;
