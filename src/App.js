import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'; // If you have a global style file for your application
import styles from './Fonts.module.css'; // Check if the path is correct
import Header from './Components/header'; // Import Header component
import Quiz from './Components/Quiz';
import Forum from './Components/Forum'; // Import Forum component
import Kontakt from './Components/Kontakt'; // Import Kontakt component
import WorkshopVy from './Vyer/WorkshopVy';
import StartVy from './Vyer/StartVy';

function App() {
 return (
 
   <Router>
     <div className="App">
       <Header />
       <Routes>
         <Route path="/" element={<StartVy />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="workshop" element={<WorkshopVy />} />
         <Route path="/forum" element={<Forum />} />
         <Route path="/kontakt" element={<Kontakt />} />
         {/* Add more routes as needed */}
       </Routes>

     </div>
   </Router>
 
 );
}


export default App;

