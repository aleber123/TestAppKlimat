import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Starta from './buttons/StartaQuiz';

function DiskutionsHeader() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?w=1480&t=st=1703532861~exp=1703533461~hmac=0a4ba4dc7579680d7714aa087459d75477fcf286851ef7da74711d2bef478ad5';

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
        Diskutera
        </h1>
        <p className={`${styles.openSans} ${styles.p} `} >På vår diskussionssida bjuder vi in dig att utforska djupare in i ämnen som våra klimatexperter ger råd om. Här kan du delta i engagerande samtal om hållbarhet, klimatförändringar och de innovativa lösningar som formar en grönare framtid. 
                                                        Det är en plats där idéer och perspektiv vävs samman, och där varje kommentar bidrar till att bygga en gemenskap som strävar efter en mer hållbar planet. Ta del av experternas insikter, dela dina tankar och vara en del av konversationen om att skapa en bättre morgondag.
        </p>
      </Container>
      
    </div>
  );
}

export default DiskutionsHeader;