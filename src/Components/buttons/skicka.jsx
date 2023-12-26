import Button from 'react-bootstrap/Button';
import styles from '../../Fonts.module.css'

function Skicka() {
  return (
    <div className="d-grid gap-2">
      <Button className={`${styles.hoverEffect} text-center`}style={{backgroundColor:'#BCD0A5', color:'#304742', borderRadius: '50px'}}>
      <p className={`${styles.openSans} ${styles.p} p-4`}>Skicka</p>
      </Button>
    </div>
  );
}

export default Skicka;