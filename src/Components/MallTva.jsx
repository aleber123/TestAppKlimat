import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import OmOss from './Omoss';
import KontaktFormular from './KontaktFormular';

function MallTva() {
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
    color: '#304742',
    marginTop: '10rem', 
    backgroundColor: 'rgba(253, 250, 242, 0.9)'
  };

  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'omoss':
        return <OmOss />;
      case 'kontakt':
        return <KontaktFormular />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#FDFAF2' }}>
      <div className="d-flex align-items-center justify-content-center flex-column" style={containerStyle}>
        <Container className="text-center p-5" style={contentStyle}>
          <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`} >Om oss</h1>
          <p className={`${styles.openSans} ${styles.p} `} style={{ borderWidth: '17px', borderColor: '#304742' }}>
            Välkomna till vårt dedikerade team av klimatmedvetna pensionärer som leder vår gemenskap mot en hållbar och klimatsmart pensionärslivsstil! Dessa ledare och många andra arbetar tillsammans för att skapa en inkluderande plats där varje pensionär kan hitta inspiration, lära sig och göra skillnad. Vi välkomnar dig att delta och vara en del av vår gemenskap för en hållbar framtid!
          </p>
        </Container>
      </div>
      <Container>
        <div className="d-flex justify-content-center p-5">
          <Row className="d-flex justify-content-between">
            <Col>
              <Card
                onClick={() => setSelectedComponent('omoss')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`} >Om oss</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Se vilka som gömmer sig bakom kulisserna</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                onClick={() => setSelectedComponent('kontakt')}
                style={{ cursor: 'pointer', width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
                className={`pl-5 user-select-all ${styles.hoverEffect}`}
              >
                <Card.Body>
                  <Card.Title className='text-center'><h2 className={`${styles.poppins}  ${styles.h2}`}>Kontakta oss</h2></Card.Title>
                  <Card.Text className='text-center pt-5'>
                    <p className={`${styles.openSans} ${styles.p}`} >Vi tar gärna emot frågor och funderingar</p>
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

export default MallTva;
