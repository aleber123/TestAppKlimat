import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Starta from './buttons/StartaQuiz';

function QuizHeader() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/fresh-organic-plant-growth-modern-greenhouse-technology-generated-by-ai_188544-37874.jpg?t=st=1703329836~exp=1703333436~hmac=94c7d6c103b755000c6514f13895005033e21e1fd7eb2c274be8f3eee7e66286&w=1800';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
    width: '100%',
    height: '40rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const contentStyle = {
    color: '#FDFAF2',
    marginTop: '10rem', // Justera detta för att ändra avståndet från toppen
    backgroundColor: 'rgba(48, 71, 66, 0.75)', // 75% opacitet,
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column" style={containerStyle}>
      <Container className="text-center p-5" style={contentStyle}>
        <h1 className={`p-2 ${styles.openSans} ${styles.bold} ${styles.h1}`} >
          Hur miljövänliga är dina matvanor? 
        </h1>
        <p className={`${styles.openSans} ${styles.p} `} >Med det här quizet kan du testa ditt klimatavtryck kopplat till dina matvanor. Efter testet kommer du att få en uppskattad bild av hur miljövänliga dina matvanor är i relation till medelsvensken. Du kommer även att få förbättringsförslag över hur du kan göra mer klimatsmarta val i din vardag. 
            Testet beräknas att ta mellan 3 - 5 minuter att besvara och består av tio frågor. Du kan när som helst välja att avbryta testet. Klicka på start så börjar vi!  
        </p>
      </Container>
      <div className="text-center p-3">
        <Starta />
        </div>
    </div>
  );
}

export default QuizHeader;