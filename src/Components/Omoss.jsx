import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KontaktCard from './KontaktCard';
import styles from '../Fonts.module.css'; 

function OmOss() {
    return (
        <div class="p-5 " style={{backgroundColor:'#FDFAF2'}}>
        <div>
            <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2} text-center p-3 ` } style={{color:'##BCD0A5'}}>Det är vi som arbetar på klimatkompassen</h2>
        </div>
        <div>
        <Container className="d-flex flex-row align-items-center justify-content-between"  >
               <KontaktCard />
        </Container>
        </div>
    </div>
    );
  }
  
  export default OmOss;






