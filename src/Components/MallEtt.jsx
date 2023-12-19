import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module


function MallEtt() {
    return (
<div style={{backgroundColor:'#FDFAF2'}}  >

<h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center p-5`} >Workshop för miljön</h1>
<Container >
<div class="d-flex justify-content-center p-5">
  <Row class="d-flex justify-content-between">
      <Col>
        <Card style={{ width: '22rem', height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }} className='pl-5'>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`} >Vad är en Workshop?</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Genom att läsa vad en workshop är, kan du känna sig förberedd inför kommande träff.</p> 
          </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      <Col>
        <Card style={{ width: '22rem',height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
          <Card.Body>
            <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`}>Hur anmäler jag mig?</h2></Card.Title>
            <Card.Text className='text-center pt-5'>
              <p className={`${styles.openSans} ${styles.p}`} >För att medverka på en av våra workshop ser vi gärna att du amäler dig innan.</p>
            </Card.Text>
          </Card.Body>
        </Card>  
      </Col>
      <Col> 
        <Card style={{ width: '22rem',height:'25rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
          <Card.Body>
          <Card.Title className='text-center'><h2 className= {`${styles.poppins} ${styles.bold} ${styles.h2}`} >När är nästa Workshop?</h2></Card.Title>
          <Card.Text className='text-center pt-5'>
            <p className={`${styles.openSans} ${styles.p}`} >Missa inte ett tilfälle att träffas och prata om miljön</p>
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  </Container>
</div>
    );
}export default MallEtt;