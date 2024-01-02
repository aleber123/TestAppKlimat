import React from 'react';
import AnmalaWorkshop from './buttons/anmalaworkshop';
import styles from '../Fonts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkshopHeader() {
  const backgroundImageURL = 'https://img.freepik.com/free-photo/aerial-view-beautiful-lake-surrounded-by-forest-great-wallpapers_181624-36398.jpg?w=1480&t=st=1703685181~exp=1703685781~hmac=3e2629c3baa41587b9a34bd383f8b2bf4a557b22b82db7d2f11ef26b8e146504';

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

export default WorkshopHeader;
