import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function MallTva() {
    return (
<div style={{backgroundColor:'#FDFAF2'}}  >

<h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`}style={{color:"#304742"}} ></h1>
<Container >
<div class="d-flex justify-content-center p-5">
  <Row class="d-flex justify-content-between">
  <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Link to="/WorkshopVadVy" className="nav-link">
      <Col>
        <Card style={{ width: '22rem', height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }} className='pl-5 user-select-all'>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`} >Om oss</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Se vilka som gömmer sig bakom kulisserna</p> 
          </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/AnmalanVy" className="nav-link"> 
      <Col>
        <Card style={{ width: '22rem',height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
          <Card.Body>
            <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`}>Kontakta oss</h2></Card.Title>
            <Card.Text className='text-center pt-5'>
              <p className={`${styles.openSans} ${styles.p}`} >Vi tar gärna emot frågor och funderingar</p>
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
}export default MallTva;