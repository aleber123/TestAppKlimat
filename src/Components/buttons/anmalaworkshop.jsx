import Button from 'react-bootstrap/Button';
import styles from '../../Fonts.module.css'

function AnmalaWorkshop() {
  return (
    <div >
      <Button className={`${styles.hoverEffect}`}
        style={{
          width: '30rem',
          height: '3rem',
          backgroundColor: '#BCD0A5',
          borderRadius: '50px',
          color: '#FDFAF2',
          outline: 'none',
          border: '0px solid #374742',
          
        }}
      >
        <span
          style={{
            fontSize: '30px', // 1.875rem is equivalent to 30px (16px base font size)
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500', // Use '500' for medium weight
          }}
        >
          <p className={`${styles.openSans} ${styles.p} ${styles.bold}`} style={{color:'#304742'}}>Anmäl dig till WORKSHOP</p>
        </span>
      </Button>
    </div>
  );
}

export default AnmalaWorkshop;
