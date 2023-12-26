import Button from 'react-bootstrap/Button';
import styles from '../../Fonts.module.css'

function KontaktButton() {
  return (
    <div>
      <Button className={`${styles.hoverEffect}`}
        style={{
          width: '20rem',
          height: '3rem',
          backgroundColor: '#304742',
          borderRadius: '50px',
          color: '#FDFAF2',
          outline: 'none',
          border: '0px solid #374742',
        }}
      >
        <span
          style={{
            fontSize: '25px', // 1.875rem is equivalent to 30px (16px base font size)
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500', // Use '500' for medium weight
          }}
        >
         <p className={`${styles.openSans} ${styles.p} p-1`}>Kontakta oss</p>
        </span>
      </Button>
    </div>
  );
}

export default KontaktButton;