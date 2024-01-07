import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; 
import Bygger from './Bygger';
import DiskutionsHeader from './DiskuteraHeader';
// Funktion för rendering av mall för länkar till olika sektioner
function MallSex() {
  // Stilar för kontainern och innehållet
  const contentStyle = {
    color: '#FDFAF2',
    marginTop: '10rem',
    backgroundColor: 'rgba(48, 71, 66, 0.75)',
  };
 // Usestate för att hålla se vilket  komponent som är vald
  const [selectedComponent, setSelectedComponent] = useState(null);
 // Funktion för att rendera rätt komponent baserat på användarens val
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'bygger':
        return <Bygger />;
      case 'bygger':
        return <Bygger />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFAF2' }}>
       <DiskutionsHeader /> 
      <Container>
        <div className="d-flex justify-content-center p-5">
          <Row className="d-flex justify-content-between">
            <Col>
              <Card
                onClick={() => setSelectedComponent('bygger')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`} >Diskutera</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >I Detta forum finns möjligheten att diskutera med varandra samt få möjlighet att få ställa frågot till våra sxperter</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('bygger')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`}>Våra experter</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >För att diskutionerna ska bli lärorika finna våra experter tillgängliga</p>
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

export default MallSex;
