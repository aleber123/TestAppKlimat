import React from 'react';
import { getWorkshopInfo } from './WorkshopArray';

const Ledare = () => {
  // Hämta workshopen med id 2 och 5
  const workshops = getWorkshopInfo();
  const workshop2 = workshops.find(workshop => workshop.id === '2');
  const workshop5 = workshops.find(workshop => workshop.id === '5');

  return (
    <div>
        <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
        <Card.Img variant="top" src={workshop2.picture} />
                <Card.Body>
                
                    <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{workshop2.Namn}</Card.Title>
                        <div class="d-flex justify-content-center p-2">
                        <Button style={{
                                width: '10rem',
                                height: '3rem',
                                backgroundColor: '#BCD0A5',
                            }}><p className={`${styles.openSans} ${styles.p} 'd-flex justify-content-center' `} style ={{color:'#304742'}}>Till Workshop</p></Button>
                        </div>
                </Card.Body>
        </Card>
         <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
            <Card.Img variant="top" src={workshop5.picture} />
            <Card.Body>
                <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{workshop5.Namn}</Card.Title>
                    <div class="d-flex justify-content-center p-2">
                    <Button style={{
                            width: '10rem',
                            height: '3rem',
                            backgroundColor: '#BCD0A5',
                            }}><p className={`${styles.openSans} ${styles.p} 'd-flex justify-content-center' `} style ={{color:'#304742'}}>Till Workshop</p></Button>
                    </div>
            </Card.Body>
       </Card>
       </div>
  );
}

export default Ledare;
