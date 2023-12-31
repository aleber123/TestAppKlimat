import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'; 

import Header from './Components/header'; 
import Quiz from './Components/Quiz';
import WorkshopVy from './Vyer/WorkshopVy';
import StartVy from './Vyer/StartVy';
import AnmalaVy from './Vyer/AmalaVy';
import Bygger from './Components/Bygger';
import MallTva from './Components/MallTva';
import MallTre from './Components/MallTre';
import QuizHeader from './Components/QuizHeader';
import QuizVy from './Vyer/QuizVy';
import WorkshopVadVy from './Vyer/WorkshopVadVy';
import OmWorkshopVy from './Vyer/OmWorkshopVy';
import MallFyra from './Components/Mallfyra';
import Co2Text from './Components/Grafer/Co2Text';
import HavsNivaText from './Components/Grafer/HavsNivaText';
import TempraturText from './Components/Grafer/TemperaturText'
import Footer from './Components/footer';
import OmOss from './Components/Omoss';
import KontaktFormular from './Components/KontaktFormular';
import MallFem from './Components/MallFem';
import MallSex from './Components/MallSex';


QuizHeader

function App() {
 return (
 
   <Router>
     <div className="App">
       <Header />
      
       <Routes>
         <Route path="/" element={<StartVy />} />
         <Route path="/quizheader" element={<QuizHeader />} />
         <Route path="/quizvy" element={<QuizVy />} />
         <Route path="workshop" element={<WorkshopVy />} />
         <Route path="workshopvad" element={<WorkshopVadVy />} />
         <Route path="omworkshop" element={<OmWorkshopVy />} />
         <Route path="omoss" element={<OmOss />} />
         <Route path="mallsex" element={<MallSex />} />
         
         <Route path="mallfem" element={<MallFem/>} />
         <Route path="kontakt" element={<KontaktFormular/>} />
        
         <Route path="AnmalanVy" element={<AnmalaVy />} />
         <Route path="bygger" element={<Bygger />} />
         <Route path="malltva" element={<MallTva />} />
         <Route path="malltre" element={<MallTre />} />
         <Route path="mallfyra" element={<MallFyra />} />
         <Route path="Co2Text" element={<Co2Text />} />
         <Route path="havsText" element={<HavsNivaText />} />
         <Route path="tempraturText" element={<TempraturText/>} />
       </Routes>
        <Footer />
     </div>
   </Router>
 
 );
}


export default App;

