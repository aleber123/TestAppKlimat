import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Temperatur from './Temperatur';
import styles from '../../Fonts.module.css'

function TemperaturText() {
  return (
    <div className="" style={{backgroundColor:'#BCD0A5'}}>
      
     <Container style={{backgroundColor:'#FDFAF2'}} className='p-5'>
     <h2 className='text-center p-2'>Jordens temperatur</h2>
        <Row>
            <Col>
            <Temperatur />
            </Col>
            <Col>
            <p className={`${styles.openSans} ${styles.p} pt-2`}>
            Diagrammet visar höjningen av den globala temperaturen i grader celcius under 1900-talet. 
            Lufttemperaturen på jorden stiger och det finns övervägande bevisning att mänskliga aktiviteter, särskilt utsläpp av växthusgaser är huvudsakligen ansvariga för att göra planeten varmare. Enligt en pågående temperaturanalys ledd av forskare vid NASA:s Goddard Institute for Space Studies har den genomsnittliga globala temperaturen på jorden ökat med minst 1,1° Celsius sedan 1880. Större delen av uppvärmningen har skett sedan 1975, med en hastighet på ungefär 0,15 till 0,20°C per årtionde.
            </p>
            <p>Källa:NASA</p>
            </Col>
        </Row>

    
        </Container>   
    
    </div>
  );
}

export default  TemperaturText;