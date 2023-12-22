
import styles from '../Fonts.module.css'; // Import your CSS module
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Bygger() {
    return (
<div class="p-5" style={{backgroundColor:'#FDFAF2'}}>

    <Container className='p-3'>
    <Row>
    <Col>
    <img src="https://i.ibb.co/4JLSPJy/13.png" alt="Hero" border="0" /> 
    </Col>
    <Col>
   
    <p className={`${styles.openSans} ${styles.p} pt-4`}>Denna sida är under uppbyggnad, välkommen åter.  </p>
    </Col>
    </Row>
    </Container>
</div>
    );
}export default Bygger;