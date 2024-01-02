import Form from 'react-bootstrap/Form';
import Skicka from '../Components/buttons/skicka'
import styles from '../Fonts.module.css'; // Import your CSS module
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

function AnmalFormular() {
  return (
    <div style={{backgroundColor:'#BCD0A5'}}className='p-5'>
          <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center pt-3`} style={{color:'#304742'}}>Anmälan till workshop</h1>
        <div className='d-flex justify-content-center'  >
        <Form className=" pt-3" style={{width:'50%'}}>
        <Form.Select aria-label="Default select example" >
                <option><p className={`${styles.openSans} ${styles.p}`}>Välj workshop</p></option>
                <option value="1"><p className={`${styles.openSans} ${styles.p}`}>Klimatsmart kost 14/1</p></option>
                <option value="2"><p className={`${styles.openSans} ${styles.p}`}>Gröna transportmedel 14/3</p></option>
                <option value="3"><p className={`${styles.openSans} ${styles.p}`}>Ekoturism 15/5</p></option>
            </Form.Select>
            <Row className='pt-3'>
                <Col>
                <Form.Control placeholder="För och efternamn" />
               
                </Col>
                <Col className=''>
                <Form.Select aria-label="Default select example">
                <option><p className={`${styles.openSans} ${styles.p}`}>Antal</p></option>
                <option value="1"><p className={`${styles.openSans} ${styles.p}`}>1</p></option>
                <option value="2"><p className={`${styles.openSans} ${styles.p}`}>2</p></option>
                <option value="3"><p className={`${styles.openSans} ${styles.p}`}>3</p></option>
            </Form.Select>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          
         <Skicka/>
        </Form>
        </div>
    </div>
  );
}

export default AnmalFormular;