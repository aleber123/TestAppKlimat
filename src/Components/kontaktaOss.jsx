import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KontaktCard from './KontaktCard';
import styles from '../Fonts.module.css'; // Import your CSS module

function KontaktaOss() {
    return (
      <Container>
        <Row>
          <Col><h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} text-center`}>Det är vi som ansvarar för workshop</h3></Col>
        </Row>
        <Row className='d-flex justify-content-center'>
        <div className="d-flex justify-content-around pt-3" style={{width:'100%'}}> 
       <KontaktCard />
        </div>
        </Row>
      </Container>
    );
  }
  
  export default KontaktaOss;






