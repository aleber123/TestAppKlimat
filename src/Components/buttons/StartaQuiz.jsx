import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Starta() {
  return (
    <div className="">
      <Button variant="primary" size="lg" className='text-center' style={{backgroundColor:'#BCD0A5', color:'#304742', height:"5rem", width:"32rem", borderRadius: '50px'}}>
      <Link className={`nav-link `} to="/quizvy" style={{ color: '#FDFAF2' }}>
              <h4 >Starta Quiz</h4>
            </Link>
      </Button>
    </div>
  );
}

export default Starta;
