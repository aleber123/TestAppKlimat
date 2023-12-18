import Button from 'react-bootstrap/Button';


function Skicka() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" className='text-center 'style={{backgroundColor:'#BCD0A5', color:'#304742'}}>
      <p>Skicka</p>
      </Button>
    </div>
  );
}

export default Skicka;