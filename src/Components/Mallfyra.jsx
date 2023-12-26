import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Co2Text from './Grafer/Co2Text';
import HavsNivaText from './Grafer/HavsNivaText';
import TemperaturText from './Grafer/TemperaturText';

function MallFyra() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Co2Text':
        return <Co2Text />;
      case 'havsText':
        return <HavsNivaText />;
      case 'tempraturText':
        return <TemperaturText />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFAF2' }}>
      <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`} style={{ color: "#304742" }} >Klimatförändringar historiskt</h1>
      <Container>
        <p className={`${styles.openSans} ${styles.p} border border-dark p-5`} style={{ borderWidth: '17px', borderColor: '#304742' }} >Har du undrat över hur klimatförändringar sett ut över tid? Här kan du se den historiska förändringen av globala temperaturer, CO2 utsläpp och havsnivåer i grafer. Dessa områden är alla påverkade av varandra och kopplade till den stundande klimatkrisen.
          Utsläpp av växthusgaser, förkortat CO2, är en stor orsak till miljö-och hälsoproblem. CO2-utsläppen befinner sig i korrelation till ett varmare klimat och på så sätt ökning av den globala temperaturen. Dessutom är den globala havsvattennivån som stiger beroende av mänskliga utsläpp av växthusgaser. Lär dig mer om hur dessa klimatförändringar ser ut genom att välja ett område nedan.
        </p>
      </Container>
      <Container>
        <div className="d-flex justify-content-center p-5">
          <Row className="d-flex justify-content-between">
            <Col>
              <Card
                onClick={() => setSelectedComponent('Co2Text')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`} >Koldioxidutsläpp</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >här finns statistik som visar klimatkrisens historia</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('havsText')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}>Havsnivå</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Läs det senaste nyheterna om klimatkrisen</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('tempraturText')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`} >Jordens temperatur</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Här samlar vi information från tidigare workshops, frågestunder och andra tips</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      {renderComponent()}
    </div>
  );
}

export default MallFyra;
