import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Fonts.module.css'; // Import your CSS module

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#304742' }}>
      <a className={`navbar-brand ${styles.poppins}`} href="#" style={{ color: '#FDFAF2' }}>
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className={`nav-link ${styles.poppins}`} href="#" style={{ color: '#FDFAF2' }}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.poppins}`} href="#" style={{ color: '#FDFAF2' }}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.poppins}`} href="#" style={{ color: '#FDFAF2' }}>
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${styles.poppins}`}
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: '#FDFAF2' }}
            >
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${styles.poppins}`} href="#" style={{ color: 'black' }}>
                Action
              </a>
              <a className={`dropdown-item ${styles.poppins}`} href="#" style={{ color: 'black' }}>
                Another action
              </a>
              <a className={`dropdown-item ${styles.poppins}`} href="#" style={{ color: 'black' }}>
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
