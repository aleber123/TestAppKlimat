import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function anmala() {
    return(
        <div className="" style={{backgroundColor:'#BCD0A5', 
        width:'100%'}}>
        <Container className='pt-2'>
        <Row>
        <Col>
          <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`} > Information om anmälan till Workshop </h2>
        </Col>
        </Row>
        <Row>
        <Col>
          <p className={`${styles.openSans} ${styles.p}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
        </Col>
        </Row>
        <Row>
        <Col>
        <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}> Vad kommer Workshopen att handla om </h2>
        </Col>
        </Row>
        <Row>
        <Col>
        <p className={`${styles.openSans} ${styles.p}`}>Det finns mycket som vi kan göra för att leva ett grönare liv, den röda tråda för våra workshops är att skapa en förståelse för varför det är viktigt och hur en förändring kan ske. På den här webbplatsen kan du får en grundförståelse för klimatkrisen, hur det har sett ut historiskt samt läsa om forskning som beskriver vad som kommer ske om vi inte ändrar vår livsstil. Varje workshop har ett tema som blir ett lärorikt tillfälle att lära sig leva klimatvänligare. </p>  
        </Col>
        </Row>
      </Container>
      </div>

    )
}export default anmala;