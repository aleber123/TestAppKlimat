import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import Bygger from './Bygger';
import UtmanaHeader from './UtmanaHeader';

function MallFem() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?w=1800&t=st=1703340648~exp=1703341248~hmac=670dbbb0de69dda7a133e7eb9ec3cf34689b06503ab84031380a22950195521a';

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
    marginTop: '10rem',
    backgroundColor: 'rgba(48, 71, 66, 0.75)',
  };

  const [selectedComponent, setSelectedComponent] = useState(null);

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
       <UtmanaHeader /> 
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
                  <Card.Title className='text-center'><h2 className={`${styles.poppins} ${styles.h2}`} >Diskutera</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Detta diskutionsforum är kopplat till månadens utmaning. Här få ni möjlighet att ge varandra tips och råd. Eller dela förändringar ni uppnått i er vardag.</p>
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
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`}>Månadens utmaning</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Ta del av månadens utmaning</p>
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

export default MallFem;
