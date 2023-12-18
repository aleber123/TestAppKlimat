import Form from 'react-bootstrap/Form';
import Skicka from '../Components/buttons/skicka'
import styles from '../Fonts.module.css'; // Import your CSS module

function KontaktFormular() {
  return (
    <div style={{backgroundColor:'#304742'}}className='pb-5'>
          <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center pt-3`} style={{color:'#FDFAF2'}}>Kontakta oss</h1>
        <div className='d-flex justify-content-center'  >
        <Form className=" pt-3" style={{width:'70%'}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option><p className={`${styles.openSans} ${styles.p}`}>Välj ett ämne</p></option>
                <option value="1"><p className={`${styles.openSans} ${styles.p}`}>Workshop</p></option>
                <option value="2"><p className={`${styles.openSans} ${styles.p}`}>Förslagslåda</p></option>
                <option value="3"><p className={`${styles.openSans} ${styles.p}`}>Övrigt</p></option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" placeholder="skriv ditt meddelande här..."rows={7} />
            </Form.Group>
         <Skicka/>
        </Form>
        </div>
    </div>
  );
}

export default KontaktFormular;