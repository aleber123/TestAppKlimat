import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from '../../Fonts.module.css'

function Starta() {
  return (
    <div className="">
      <Button variant="primary" size="lg" className={`${styles.hoverEffect} text-center`} style={{backgroundColor:'#BCD0A5', color:'#304742', height:"4rem", width:"32rem", borderRadius: '50px'}}>
      <Link className={`nav-link `} to="/quizvy" style={{ color: '#FDFAF2' }}>
      <p className={`${styles.openSans} ${styles.p} ${styles.bold} p-3`} style={{color:'#304742'}}>Starta QUIZ</p>
            </Link> 
      </Button>
    </div>
  );
}

export default Starta;
