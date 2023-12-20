import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Fonts.module.css'; // Import your CSS module
import { getWorkshopInfo } from './WorkshopArray';



function KalenderCard() {
  const WorkArray= getWorkshopInfo();
  return WorkArray.map((work) =>  (
    <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
      <Card.Img variant="top" src={work.picture} />
      <Card.Body>
       
        <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{work.Namn}</Card.Title>
        <div class="d-flex justify-content-center p-2">
        <Button style={{
                width: '10rem',
                height: '3rem',
                backgroundColor: '#BCD0A5',
              }}><p className={`${styles.openSans} ${styles.p} 'd-flex justify-content-center' `} style ={{color:'#304742'}}>Till Workshop</p></Button>
        </div>
      </Card.Body>
    </Card>
  ));
}

export default KalenderCard;