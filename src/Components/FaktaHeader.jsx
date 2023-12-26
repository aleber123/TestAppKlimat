import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Starta from './buttons/StartaQuiz';

function FaktaHeader() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/smart-farming-with-agriculture-iot_53876-124634.jpg?w=2000&t=st=1703532913~exp=1703533513~hmac=dedb7a0f753fefd3e6d0f54273f3bed5db623d9deef1dd2f79b601799958d259';

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
    marginTop: '8rem', // Justera detta för att ändra avståndet från toppen
    backgroundColor: 'rgba(48, 71, 66, 0.75)', // 75% opacitet,
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column" style={containerStyle}>
      <Container className="text-center p-5" style={contentStyle}>
        <h1 className={`p-2 ${styles.openSans} ${styles.bold} ${styles.h1}`} >
       Lära
        </h1>
        <p className={`${styles.openSans} ${styles.p} `} >Klimatet har historiskt sett alltid varit föränderligt men nu ökar den globala uppvärmningen mer än någonsin. Klimatförändringarna gör att ekosystemen inte hinner anpassa sig till samma höga takt. Detta leder bland annat till havsnivåer som stiger och polarisar som smälter. Det blir vanligare med extremväder som torka och värmeböljor. Klimatförändringar är ett allvarligt hot och för att minska klimatförändringar har olika klimatmål i EU och världen stiftats. 
         Men du och jag, den enskilda människan har också ett ansvar. Vi bör läsa på och göra val i vardagen som är snällare mot miljön. Vi på Klimatkompassen vill inspirera till detta genom våra workshops och hemsida. Här på hemsidan kan du läsa nyheter, både globala och lokala från Värmland, hitta tips och inspiration för en mer miljömedveten livsstil eller varför inte motivera eller bli motiverad i vårt diskussionsforum. På den här sidan kan du läsa mer om klimatförändringarnas konsekvenser samt hållbar utveckling. 
  </p> 
      </Container>
      
    </div>
  );
}

export default FaktaHeader;