import styles from '../Fonts.module.css'; // Import your CSS module
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getkontaktInfo } from './KontaktArray';
import Card from 'react-bootstrap/Card';
import KontaktButton from "./buttons/kontaktButton";

function OmWorkshop() {
    const kontakt = getkontaktInfo();
  const kontakt2 = kontakt.find(kontakt => kontakt.id === '2');
    return(
        
        <div style={{backgroundColor:'#BCD0A5', width:'100%'}}>
            
            <div class="d-flex justify-content-center" >
                <Container style={{backgroundColor:'#FDFAF2'}} className="p-5"> 
                    <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} `}>21/1 Klimatsmart semester</h3> 
                    <Row className='pt-2'>
                        <Col>
                        <p className={`${styles.openSans} ${styles.p} ${styles.bold} `} >Sammanfattning</p>
                        <p className={`${styles.openSans} ${styles.p}`} >
                            Vår inspirerande workshop om Klimatsmarta Semestrar var en djupdykning i hållbara resalternativ och praktiska tips för att minska vår miljöpåverkan när vi utforskar världen. Genom att fokusera på smarta val och ansvarsfulla beslut, delade vi insikter om hur vi kan njuta av våra semesterupplevelser samtidigt som vi bidrar till en mer hållbar planet.
                            Workshopen syftade till att inspirera deltagarna att ta med sig dessa insikter och tillämpa dem i sina framtida resor, för att skapa en mer hållbar och medveten inställning till semesterupplevelser. Genom små förändringar i vårt resande kan vi alla bidra till att bevara och skydda vår vackra planet för framtida generationer.
                        </p> 
                        </Col>
                        <Col>
                        <p className={`${styles.openSans} ${styles.p} ${styles.bold} `} >Höjdpunkter</p>
                        <ul>
                        <li> <p className={`${styles.openSans} ${styles.p}`} >Eco-Adventures: Utforska alternativa och miljövänliga sätt att njuta av äventyr och upptäckter under semestern.</p></li>
                        <li> <p className={`${styles.openSans} ${styles.p}`} >Hållbara Boenden: Tips och tricks för att välja grönare boendealternativ och minska vår klimatpåverkan </p></li>
                        <li> <p className={`${styles.openSans} ${styles.p}`} >Lokal Kultur och Mat: Utforska och uppskatta lokal kultur och mat med minimal miljöpåverkan.</p></li> 
                        <li> <p className={`${styles.openSans} ${styles.p}`} >Genomgång av miljövänliga transportalternativ och hur vi kan minska vårt kolavtryck under resor.</p></li>
                        <li> <p className={`${styles.openSans} ${styles.p}`} >Minimal Avfall: Praktiska strategier för att minimera avfall och engagera sig i resor med lägre miljöpåverkan.</p></li>   
                        </ul> 
                        </Col>
                    </Row>
                    <Row>
                    <Row>
                    <p className={`${styles.openSans} ${styles.p} ${styles.bold} text-center`} >Ansvarig för workshopen var</p>
                    </Row>
                    <Row  className='d-flex justify-content-center'>
                    <Card style={{width: '17rem', height:'20rem', backgroundColor:'FDFAF2' }}>
                        <Card.Img variant="top" src={kontakt2.picture} />
                        <Card.Body>
                            <Card.Title  className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center p-2`} >{kontakt2.Namn}</Card.Title>
                            <Card.Text className='text-center'>
                            <p>{kontakt2.mail}</p>    
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    </Row>
                    </Row>
                </Container>
            </div>
           
            
        </div>
    )
}export default OmWorkshop;