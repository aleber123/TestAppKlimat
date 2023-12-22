import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Temperatur from './Temperatur';

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
            <p >
                Sveriges miljömål beskriver att de senaste åren - 2015 till 2022 - har utgjort de åtta varmaste åren som har registrerats. Huvudorsaken till den observerade uppvärmningen av jordens klimat är den förändring av luftens kemiska sammansättning som människan orsakar genom utsläpp av växthusgaser sveriges miljömål. Förutom av mänsklig verksamhet påverkas klimatet, i olika tidshorisonter, även av naturliga fenomen såsom vulkanutbrott, förändringar i solens aktivitet, förändringar i jordens rörelser runt solen och runt sin egen axel, samt interna variationer i klimatet exempelvis ”El Niño”-cyklerna
            </p>
            </Col>
        </Row>

    
        </Container>   
    
    </div>
  );
}

export default  TemperaturText;