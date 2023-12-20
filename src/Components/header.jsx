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
        <p className={`${styles.openSans} ${styles.p} p-2`} style={{ color: '#FDFAF2' }}>Klimatkompassen</p>
        <Container>
          <Nav className="d-flex justify-content-around w-100">
            <Link className={`nav-link ${styles.poppins}`} to="/quiz" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} px-2`}>Quiz</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins}`} to="/forum" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Forum</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins}`} to="/workshop" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Workshop</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins}`} to="/nyheter" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Fakta</h4>
            </Link>

            <Link className={`nav-link ${styles.poppins}`} to="/kontakt" style={{ color: '#FDFAF2' }}>
              <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}`}>Kontakt</h4>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
