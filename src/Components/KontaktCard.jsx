import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../Fonts.module.css'; // Import your CSS module

function KontaktCard() {
  return (
    <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg?w=1480&t=st=1702488320~exp=1702488920~hmac=3fd5edb17de34223f20ead08306aabbe018cf11ed1c726a98f812eb3e6245938" />
      <Card.Body>
        <Card.Title><p className={`${styles.openSans} ${styles.p}`} >Johanna Fransson</p></Card.Title>
        <Card.Text>
          <p className={`${styles.openSans} ${styles.p}`}>Johanna@mail.com</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default KontaktCard;