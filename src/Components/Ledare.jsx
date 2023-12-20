import React from 'react';
import { getkontaktInfo } from './KontaktArray';
import Card from 'react-bootstrap/Card';
import styles from '../Fonts.module.css'; // Import your CSS module
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KontaktButton from "./buttons/kontaktButton";

const Ledare = () => {
  // Hämta workshopen med id 2 och 5
  const kontakt = getkontaktInfo();
  const kontakt2 = kontakt.find(kontakt => kontakt.id === '2');
  const kontakt5 = kontakt.find(kontakt => kontakt.id === '5');

  return (
    <div className='' style={{backgroundColor:'FDFAF2'}}>
              <Container className='p-5' style={{width:'50%'}}>
        <Row>
          <Col><h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center pb-3`}>Det är vi som ansvarar för workshop</h3></Col>
        </Row>
        <Row className='d-flex justify-content-center'>
        <div className="d-flex justify-content-around pt-3" style={{width:'100%'}}>

        <Card style={{width: '17rem', height:'20rem', backgroundColor:'FDFAF2' }}>
        <Card.Img variant="top" src={kontakt2.picture} />
                <Card.Body>
                
                    <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{kontakt2.Namn}</Card.Title>
                    <Card.Text className='text-center'>
                <p>{kontakt2.mail}</p>    
                </Card.Text> 
                </Card.Body>
        </Card>

         <Card style={{ width: '17rem', height:'20rem', backgroundColor:'FDFAF2' }}>
            <Card.Img variant="top" src={kontakt5.picture} />
            <Card.Body>
                <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{kontakt5.Namn}</Card.Title>
                 <Card.Text className='text-center'>
                <p>{kontakt5.mail}</p>    
                </Card.Text> 
            </Card.Body>
       </Card>
        </div>
        </Row>
        <div className="d-flex justify-content-center p-5 ">
        <KontaktButton/>
        </div>
      </Container>



      
       </div>
  );
}

export default Ledare;
