import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; 
import FaktaHeader from './FaktaHeader';
import Bygger from './Bygger';
import MallFyra from './Mallfyra';

// Funktion för rendering av mall för länkar till olika sektioner
function MallTre() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'statistik':
        return <MallFyra />;
      case 'nyheter':
        return <Bygger/>;
      case 'kunskapsbank':
        return <Bygger />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFAF2' }}>
      <FaktaHeader />
      <Container>
        <div className="d-flex justify-content-center p-5">
          <Row className="d-flex justify-content-between">
            <Col>
              <Card
                onClick={() => setSelectedComponent('statistik')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`} >Statistik</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >här finns statistik som visar klimatkrisens historia</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('nyheter')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`}>Nyheter</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Läs det senaste nyheterna om klimatkrisen</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('kunskapsbank')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`} >Kunskapsbank</h2></Card.Title>
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

export default MallTre;
