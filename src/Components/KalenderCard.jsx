import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function KalenderCard() {
  return (
    <Card style={{ width: '15rem', backgroundColor:'FDFAF2' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/top-view-eco-friendly-cleaning-products-with-lemon_23-2148818433.jpg?w=1480&t=st=1702464969~exp=1702465569~hmac=9721e9a72b0135a1047b542957f09d0b0d2fb5d965cfc7d46d15f46e1e65f8d5" />
      <Card.Body>
       
        <Card.Title  className="text-center p-2">Ekologiska städprodukter</Card.Title>
        <div class="d-flex justify-content-center p-2">
        <Button style={{
                width: '10rem',
                height: '3rem',
                backgroundColor: '#BCD0A5',
              }}><p className='d-flex justify-content-center'style ={{color:'#304742'}}>Till Workshop</p></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default KalenderCard;