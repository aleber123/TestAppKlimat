import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Fonts.module.css'; // Import your CSS module

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#304742' }}>
      <Link className={`navbar-brand ${styles.poppins}`} to="/" style={{ color: '#FDFAF2' }}>
        Navbar
      </Link>
      {/* ... Other elements in the header */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/quiz" style={{ color: '#FDFAF2' }}>
              Klimatquiz & utmaningar
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/forum" style={{ color: '#FDFAF2' }}>
              Diskussionsforum
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/workshop" style={{ color: '#FDFAF2' }}>
              Workshop & Evenemang
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/nyheter" style={{ color: '#FDFAF2' }}>
              Nyheter & artiklar
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${styles.poppins}`} to="/kontakt" style={{ color: '#FDFAF2' }}>
              Kontakt
            </Link>
          </li>
          {/* ... Other navigation links */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
