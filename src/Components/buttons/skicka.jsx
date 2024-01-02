import Button from 'react-bootstrap/Button';
import styles from '../../Fonts.module.css'

function Skicka() {
  return (
<div className="d-flex align-items-center justify-content-end">
  <Button className={`${styles.hoverEffect} d-flex align-items-center`} style={{ backgroundColor: '#304742', color: '#FDFAF2', borderRadius: '30px', width: '10rem' }}>
    <p className={`${styles.poppins} ${styles.p} ${styles.bold} m-2`}>Skicka</p>
    <i className="bi bi-send ml-2 fs-4 p-2"></i>
  </Button>
</div>





  );
}

export default Skicka;