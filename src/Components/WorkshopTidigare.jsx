import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../Fonts.module.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function WorkshopTidigare() {
  return (
    <div style={{backgroundColor:'#BCD0A5', width:'100%'}}  className='d-flex justify-content-center '>
        
      <Container style={{backgroundColor:'#BCD0A5'}}  className='m-5'>
        <Row>
            <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} pt-3 text-center`}>Tidigare Workshop</h3> 
        </Row>
        <Row className='pt-5'>
            <ListGroup style={{backgroundColor:'#FDFAF2'}} className='d-flex p-1'>
            <Row>
                <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-3`}>Arkiv</h4> 
            </Row>
            <Row>
                <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-3`}>2023</h4> 
            </Row> 
            <ListGroup.Item className='mt-1 list-group-item d-flex'>
                <div className='block-example border border-dark'>
                    <p className={`${styles.openSans} ${styles.p} m-3`}> 21/1</p>
                </div>
                <div>
                <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-1 list-group-item d-flex'>
                <div className='block-example border border-dark'>
                    <p className={`${styles.openSans} ${styles.p} p-3`}> 21/1</p>
                </div>
                <div>
                <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-1 list-group-item d-flex'>
                <div className='block-example border border-dark'>
                    <p className={`${styles.openSans} ${styles.p} p-3`}> 21/2</p>
                </div>
                <div>
                <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className='mt-1 list-group-item d-flex'>
                <div className='block-example border border-dark'>
                <p className={`${styles.openSans} ${styles.p} p-3`}> 21/2</p>
                </div>
                <div>
                <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/omworkshop" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                </div>
            </ListGroup.Item>
            </ListGroup>
        </Row>
        <Row>
            <ListGroup style={{backgroundColor:'#FDFAF2'}} className='d-flex p-1'>
                <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-3`}>2022</h4>  
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 24/1</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link> 
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 21/3</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 15/7</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 20/1</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Row>
        <Row>
            <ListGroup style={{backgroundColor:'#FDFAF2'}} className='d-flex p-1'>
                <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-3`}>2021</h4>  
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 18/1</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 14/3</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                        <p className={`${styles.openSans} ${styles.p} p-3`}> 22/5</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='mt-1 list-group-item d-flex'>
                    <div className='block-example border border-dark'>
                    <p className={`${styles.openSans} ${styles.p} p-3`}> 21/8</p>
                    </div>
                    <div>
                    <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect} "nav-link"`}  to="/omworkshop"  style={{ color: '' }}>
              <p className={`${styles.poppins}  ${styles.p} m-3`}>Eco-Adventures: Semestra med Klimathänsyn</p>
            </Link>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Row>
        </Container> 
    </div>



 
  );
}

export default WorkshopTidigare;