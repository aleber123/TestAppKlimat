import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function MallEtt() {
    return (
<div style={{backgroundColor:'#FDFAF2'}}  >

{/* <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`}style={{color:"#304742"}} >Workshop för miljön</h1> */}
<Container >
<div class="d-flex justify-content-center p-5">
  <Row class="d-flex justify-content-between">
  <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Link to="/workshopvad" className="nav-link">
      <Col>
        <Card   style={{ width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
      className={`pl-5 user-select-all ${styles.hoverEffect}`} >
          <Card.Body >
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.h2}`} >Vad är en Workshop?</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Genom att läsa vad en workshop är, kan du känna sig förberedd inför kommande träff.</p> 
          </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/AnmalanVy" className="nav-link"> 
      <Col>
        <Card style={{ width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
      className={`pl-5 user-select-all ${styles.hoverEffect}`}>
          <Card.Body>
            <Card.Title className='text-center'><h2 className= {`${styles.poppins}  ${styles.h2}`}>Hur anmäler jag mig?</h2></Card.Title>
            <Card.Text className='text-center pt-5'>
              <p className={`${styles.openSans} ${styles.p}`} >För att medverka på en av våra workshop ser vi gärna att du amäler dig innan.</p>
            </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      </Link>
      </Nav.Item>
      <Nav.Item>
      <Link to="/omworkshop" className="nav-link"> 
      <Col> 
        <Card style={{ width: '22rem', height: '25rem', backgroundColor: '#567B5D', color: 'FDFAF2', transition: 'transform 0.2s' }}
      className={`pl-5 user-select-all ${styles.hoverEffect}`}>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins}  ${styles.h2}`} >Om våra workshops</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Missa inte ett tilfälle att träffas och prata om miljön</p>
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
}export default MallEtt;