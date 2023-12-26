import Table from 'react-bootstrap/Table';
import { Link,  } from 'react-router-dom';
import styles from '../Fonts.module.css'; // Import your CSS module
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return(
        <div>
            <div >
                <div style={{backgroundColor:'#304742',color:'#FDFAF2',
                    width:'100%', 
                    height:'20rem',
                  }} className='d-flex justify-content-center'>
                  <div style={{ width: '80%' }} className='d-flex flex-column align-items-center justify-content-center'>
                  <p className={`${styles.poppins}  ${styles.h4} ${styles.bold} text-center pt-5`}>Genvägar</p>
                  <Table style={{ border: 'none' }}>
                    <tbody >
                        <tr  >
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> <Link className={`nav-link ${styles.OpenSans} ${styles.hoverEffect}`} to="/quizheader" style={{ color: '' }}>
                            <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold} `}>Quiz</p>
                            </Link>
                        </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}>
                        <Link className={`nav-link ${styles.OpenSans} ${styles.hoverEffect}`} to="/utmana" style={{ color: '' }}>
                            <p className={`${styles.OpenSans} ${styles.p} ${styles.bold}`}>Utmana</p>
                            </Link>
                        </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}>
                        <Link className={`nav-link ${styles.OpenSans} ${styles.hoverEffect}`} to="/diskutera" style={{ color: '' }}>
                        <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold}`}>Diskutera</p>
                        </Link>
                        </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}>
                        <Link className={`nav-link ${styles.OpenSans} ${styles.hoverEffect}`} to="/Malltre" style={{ color: '' }}>
                        <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold}`}>Lära</p>
                        </Link>
                        </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}>
                        <Link className={`nav-link ${styles.OpenSans} ${styles.hoverEffect}`} to="/malltva" style={{ color: '' }}>
                        <p className={`${styles.OpenSans} ${styles.p} ${styles.bold}`}>Om oss</p>
                        </Link>
                        </td>
                        </tr>
                        <tr >
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> <p className={`${styles.OpenSans} ${styles.p}`}>Månadens utmaning</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Våra experter</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Fakta</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Presentation av oss</p></td>
                        </tr>
                        <tr>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> </td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Diskutera utmaning</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> <p className={`${styles.OpenSans} ${styles.p}`}>Diskutions Forum</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Nyheter</p></td>
                        <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Kontakta oss</p></td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> </td>
                            <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}> </td>
                            <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}><p className={`${styles.OpenSans} ${styles.p}`}>Kunskapsbank</p></td>
                            <td style={{ backgroundColor: '#304742', color: '#FDFAF2' }}></td>
                
                        </tr>
                    </tbody>
                    </Table>
                  </div>
                </div>  
            </div>
            <div style={{backgroundColor:'#304742', 
                        color:'#FDFAF2',
                        width:'100%', 
                        height:'20rem',
                  }}>
             <div className='p-5'>
                  <Row>
                    <Col style={{width:'33%'}}>
                    <hr style={{color:'#FDFAF2'}}></hr>
                    <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold} text-center`}>Kontakta oss</p>
                    <Navbar.Brand>
                        <span className=''>
                            <Link to="./">
                            <img style={{ height: '130px', width: '130px' }} className='' src="https://i.ibb.co/hyVT6m5/S-4.png" alt="logotyp" border="0" />
                            </Link>
                        </span>
                    </Navbar.Brand>
                    </Col>
                    <Col style={{width:'33%'}}>
                    <hr style={{color:'#FDFAF2'}}></hr>
                    <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold} text-center` }> Genvägar</p>
                    </Col>
                    <Col style={{width:'33%'}}>
                    <hr style={{color:'#FDFAF2'}}></hr>
                    <p className={`${styles.OpenSans}  ${styles.p} ${styles.bold} text-center`}> Följ oss på Socialamedier</p>
                    </Col>
                  </Row>
            </div>  
                
            </div>
        </div>
    )
}export default Footer;