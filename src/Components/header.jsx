import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Fonts.module.css'; // Import your CSS module


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{ height:"12rem", backgroundColor: '#304742' }}>
      <Link to="./" >
      <img style={{height:"200px", width:"200px"}} className='p-2' src="https://i.ibb.co/vxM3hm5/logotyp1.png"alt="logotyp" border="0" />
      </Link> 
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown ">
        <ul className="navbar-nav ">
          <li>
            <Link className={`nav-link `} to="/quiz" style={{ color: '#FDFAF2' }} >
            <p className={`${styles.openSans} ${styles.p} pt-4`}>Testa</p>
            </Link>
            </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/forum" style={{ color: '#FDFAF2' }}>
            <p className={`${styles.openSans} ${styles.p} pt-4`}>Forum</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/workshop" style={{ color: '#FDFAF2' }}>
            <p className={`${styles.openSans} ${styles.p} pt-4`}>Workshop</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/nyheter" style={{ color: '#FDFAF2' }}>
            <p className={`${styles.openSans} ${styles.p} pt-4`}>Fakta</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/kontakt" style={{ color: '#FDFAF2' }}>
            <p className={`${styles.openSans} ${styles.p} pt-4`}>kontakt</p>
            </Link>
          </li>
          {/* ... Other navigation links */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;