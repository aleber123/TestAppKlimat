import Button from 'react-bootstrap/Button';
import styles from '../../Fonts.module.css'

function Synka() {
  return (
    <div className="">
      <Button  className={`${styles.hoverEffect} text-center`} style={{backgroundColor:'#BCD0A5', color:'#304742', height:"3rem", width:"12rem", borderRadius: '50px', width:'15rem'}}>
      <p className={`${styles.openSans} ${styles.p} `}>Synka alla event</p>
      </Button>
    </div>
  );
}

export default Synka;