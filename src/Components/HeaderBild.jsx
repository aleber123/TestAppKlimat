import React from 'react';
import AnmalaWorkshop from './buttons/anmalaworkshop';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderBild() {
  const backgroundImageURL = 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
    width: '100%',
    height: '40rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const contentStyle = {
    color: '#FDFAF2',
    marginTop: '20rem', // Justera detta för att ändra avståndet från toppen
  };

  const textWithShadowStyle = {
    textShadow: '5px 5px 10px rgba(0, 0, 0, 1)', // Lägg till svart textskugga
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={containerStyle}>
      <div className="text-center" style={contentStyle}>
        <h1 className={`p-2 ${styles.openSans} ${styles.bold} ${styles.h1}`} style={{ ...textWithShadowStyle }}>
          Bli en klimatsmart pensionär
        </h1>
        <h2 className={`${styles.openSans} ${styles.h2} p-3`} style={{ ...textWithShadowStyle }}>
          Delta på en workshop
        </h2>
        <div className="text-center">
          <AnmalaWorkshop />
        </div>
      </div>
    </div>
  );
}

export default HeaderBild;
