import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'; // If you have a global style file for your application
import styles from './Fonts.module.css'; // Check if the path is correct
import Header from './Components/header'; // Import Header component
import HeaderBild from './Components/HeaderBild';
import MallEtt from './Components/MallEtt';
import Footer from './Components/footer';
import Quiz from './Components/Quiz'; // Import Quiz component
import Workshop from './Components/Workshop'; // Import Workshop component
import Forum from './Components/Forum'; // Import Forum component
import Kontakt from './Components/Kontakt'; // Import Kontakt component


function App() {
 return (
   <Router>
     <div className="App">
       <Header />
       <Routes>
         <Route path="/" element={<HeaderBild />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/workshop" element={<Workshop />} />
         <Route path="/forum" element={<Forum />} />
         <Route path="/kontakt" element={<Kontakt />} />
         {/* Add more routes as needed */}
       </Routes>
       <MallEtt />
       <Footer />
       <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1}`}>Rubrik 1</h1>
       <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}>Rubrik 2</h2>
       <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3}`}>Rubrik 3</h3>
       <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Rubrik 4</h4>
       <p className={`${styles.openSans} ${styles.p}`}>Brödtext</p>
       {/* ... Andra rubrik-element med olika typsnitt, vikter och storlekar */}
     </div>
   </Router>
 );
}


export default App;