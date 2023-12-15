import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KontaktCard from './KontaktCard';
import styles from '../Fonts.module.css'; // Import your CSS module

function KontaktaOss() {
    return (
      <Container>
        <Row>
          <Col><h3 className="text-center">Det är vi som ansvarar för Workshop</h3></Col>
        </Row>
        <Row className='d-flex justify-content-center'>
        <div className="d-flex justify-content-around pt-3" style={{width:'50%'}}> 
        <KontaktCard/>
        <KontaktCard/>
        </div>
        </Row>
      </Container>
    );
  }
  
  export default KontaktaOss;






