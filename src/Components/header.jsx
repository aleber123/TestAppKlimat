import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Fonts.module.css'; // Import your CSS module

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// ... (your imports)

function Header() {
  return (
    <div style={{ height: '10rem', width:"", backgroundColor: '#304742' }}>
      <Navbar className='p-3' >
        <Navbar.Brand>
          <span className=''>
            <Link to="./">
              <img style={{ height: '130px', width: '130px' }} className='' src="https://i.ibb.co/hyVT6m5/S-4.png" alt="logotyp" border="0" />
            </Link>
          </span>
        </Navbar.Brand>
       
        <Container>
        <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins}  ${styles.h4}`}>Startsida</h4>
            </Link>
          <Nav className="d-flex justify-content-around w-100">
            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/quizheader" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins}  ${styles.h4} `}>Quiz</h4>
            </Link>
            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/mallfem" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.h4}`}>Utmana</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/mallsex" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins}  ${styles.h4}`}>Diskutera</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/workshop" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins}  ${styles.h4}`}>Workshop</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/Malltre" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins}  ${styles.h4}`}>Lära</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins} ${styles.hoverEffect}`} to="/malltva" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.h4}`}>Om oss</h4>
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
