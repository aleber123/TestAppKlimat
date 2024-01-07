import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from '../Fonts.module.css'; 


function Hero() {
  return (
<div style={{backgroundColor:"#FDFAF2"}}>
<Container >
<h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center`}> Här är ditt resultat</h1>
</Container>
<Container className='p-3'>
<h2 className={`${styles.poppins} ${styles.bold} ${styles.h2}`}>Tyvärr har du svarat på för få frågor för att få ett resultat</h2>
</Container>

</div>
  );
}

export default Hero;