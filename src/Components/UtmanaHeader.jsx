import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MallFem from './MallFem';

function UtmanaHeader() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/hand-touching-tree-moss-close-up_23-2148918909.jpg?w=1480&t=st=1703531943~exp=1703532543~hmac=df39ac47194c227108f15395e4914980357a216d82caa152ad8d67e996839699';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
    width: '100%',
    height: '40rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const contentStyle = {
    color: '#304742',
    marginTop: '10rem', 
    backgroundColor: 'rgba(253, 250, 242, 0.9)'
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column" style={containerStyle}>
      <Container className="text-center p-5" style={contentStyle}>
        <h1 className={`p-2 ${styles.openSans} ${styles.bold} ${styles.h1}`} >
       Utmana
        </h1>
        <p className={`${styles.openSans} ${styles.p} `} >Vi strävar ständigt efter en mer hållbar livsstil genom att uppmana våra medlemmar att utforska olika aspekter av hållbarhet varje månad. Vi reflekterar över våra dagliga vanor för att minska miljöpåverkan, t.ex. genom att använda färre engångsprodukter, vara medvetna om energiförbrukning och välja miljövänliga transportalternativ. 

Genom att dela erfarenheter och idéer inspirerar vi varandra att göra hållbara val och skapar en stöttande gemenskap för en medveten livsstil. Varje liten handling spelar en roll i att bygga en bättre framtid för oss och kommande generationer.

        </p>
      </Container>
    
    </div>
  );
}

export default UtmanaHeader;