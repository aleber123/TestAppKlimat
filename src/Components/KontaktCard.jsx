
import Card from 'react-bootstrap/Card';
import styles from '../Fonts.module.css'; // Import your CSS module
import { getkontaktInfo } from './KontaktArray';

function KontaktCard() {
 const kontaktArray= getkontaktInfo();
  return kontaktArray.map((kontakt) => (

    <Card style={{ width: '15rem', height:"20rem", backgroundColor:'FDFAF2' }}>
       <Card.Img
        style={{ height: '10rem', width: 'auto', objectFit: 'cover' }}
        variant="top"
        src={kontakt.picture}
      />
      <Card.Body>
        <Card.Title><p className={`${styles.openSans} ${styles.p} text-center`} >{kontakt.Namn}</p></Card.Title>
        <Card.Text>
          <p className='text-center' >{kontakt.mail}</p>
        </Card.Text>
      </Card.Body>
    </Card>
   ) );
}

export default KontaktCard;