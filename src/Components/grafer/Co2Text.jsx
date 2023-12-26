import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Co2Chart from './Co2LineChart';
import MallTre from '../MallTre';
import MallFyra from '../Mallfyra';
import styles from '../../Fonts.module.css'

function Co2Text() {
  return (
    <div className="" style={{backgroundColor:'#BCD0A5'}}>
     <Container style={{backgroundColor:'#FDFAF2'}} className='p-3'>
     <h2 className='text-center p-2'>Koldioxidutsläpp</h2>
        <Row>
            <Col>
            <Co2Chart />
            </Col>
            <Col>
            <p className={`${styles.openSans} ${styles.p} pt-2`}>   
            Diagrammet illustrerar de totala koldioxidutsläppen från förbränning av fossila bränslen och cementproduktion, visat i miljoner metriska ton C, och hur de har ökat under 1900-talet. Sedan 1970-talet har de globala växthusgasutsläppen mer än fördubblats. Den årliga ökningstakten har i genomsnitt varit cirka två procent sedan 1970. Ökningstakten sjunkit något, vilket delvis kan tillskrivas förändringar i geopolitiska och ekonomiska förhållanden, men är det fortfarande ett stort problem.  
            </p>
            <p>Källa: naturvårdsverket</p>
            </Col>
        </Row>

    
        </Container>   
    
    </div>
  );
}

export default  Co2Text;