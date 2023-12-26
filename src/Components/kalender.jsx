import KalenderCard from "./KalenderCard";
import styles from '../Fonts.module.css'; // Import your CSS module
import Container from 'react-bootstrap/Container';
import SynkaHel from "./SynkaHel";

function Kalender() {
    return (
<div class="p-5 " style={{backgroundColor:'#FDFAF2'}}>
    <div>
        <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2} text-center p-3 ` } style={{color:'#304742'}}>Kommande Workshop</h2>
    </div>
    <div>
    <Container className="d-flex flex-row align-items-center justify-content-between"  style={{ width:'80%' }} >
           <KalenderCard />
    </Container>
    </div>
</div>
    );
}export default Kalender;