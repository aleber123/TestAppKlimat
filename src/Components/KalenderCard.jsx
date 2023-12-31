import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Fonts.module.css'; 
import { getWorkshopInfo } from './WorkshopArray';



function KalenderCard() {
   // Hämta information om workshops från funktionen getWorkshopInfo
  const WorkArray= getWorkshopInfo();
  // kort för varje workshop som finns i arrayen
  return WorkArray.map((work) =>  (

    <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
      <Card.Img variant="top" src={work.picture}  />
      <Card.Body>
       
        <Card.Title style={{ height: '3rem', backgroundColor:'FDFAF2' }} className={`${styles.openSans} ${styles.bold} ${styles.p} text-center p-2`} >{work.Namn}</Card.Title>
        <div class="d-flex justify-content-center p-2">
        <Button style={{
                width: '10rem',
                height: '3rem',
                marginTop: '5rem',
                backgroundColor: '#304742',
                borderRadius: '50px',
                
              }}><p className={`${styles.openSans} ${styles.p} 'd-flex justify-content-center' `} style ={{color:'#FDFAF2'}}>Till Workshop</p></Button>
        </div>
      </Card.Body>
    </Card>
  ));
}

export default KalenderCard;