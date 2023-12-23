import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Co2Text from './Grafer/Co2Text';



function MallFyra() {
    return (

<div style={{backgroundColor:'#FDFAF2'}}  >

<h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`}style={{color:"#304742"}} >Klimatförändringar historiskt</h1>
<Container>
  <p className={`${styles.openSans} ${styles.p} border border-dark p-5`} style={{borderWidth:'17px', borderColor:'#304742'}} >Har du undrat över hur klimatförändringar sett ut över tid? Här kan du se den historiska förändringen av globala temperaturer, CO2 utsläpp och havsnivåer i grafer. Dessa områden är alla påverkade av varandra och kopplade till den stundande klimatkrisen. 
        Utsläpp av växthusgaser, förkortat CO2, är en stor orsak till miljö-och hälsoproblem. CO2-utsläppen befinner sig i korrelation till ett varmare klimat och på så sätt ökning av den globala temperaturen. Dessutom är den globala havsvattennivån som stiger beroende av mänskliga utsläpp av växthusgaser. Lär dig mer om hur dessa klimatförändringar ser ut genom att välja ett område nedan. 
  </p> 
</Container>
<Container >
<div class="d-flex justify-content-center p-5">
  <Row class="d-flex justify-content-between">
  <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Link to="/Co2Text" className="nav-link">
      <Col>
        <Card style={{ width: '23rem', height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }} className='pl-5 user-select-all'>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`} >Koldioxidutsläpp</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >här finns statistik som visar klimatkrisens histora</p> 
          </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/havsText" className="nav-link"> 
      <Col>
        <Card style={{ width: '23rem',height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
          <Card.Body>
            <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`}>Havsnivå</h2></Card.Title>
            <Card.Text className='text-center pt-5'>
              <p className={`${styles.openSans} ${styles.p}`} >Läs det senaste nyheterna om klimatkrisen</p>
            </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/tempraturText" className="nav-link"> 
      <Col> 
        <Card style={{ width: '23rem',height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`} >Jordens temperatur</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Här samlar vi information från tidigare workshops, frågestunder och andra tips</p>
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Link>
      </Nav.Item>
      </Nav>
    </Row>
    </div>
  </Container>
</div>
    );
}export default MallFyra;