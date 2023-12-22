import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HavsNiva from './HavsNiva';

function HavsNivaText() {
  return (
    <div className="" style={{backgroundColor:'#BCD0A5'}}>
      
     <Container style={{backgroundColor:'#FDFAF2'}} className='p-5'>
     <h2 className='text-center p-2'>Jordens temperatur</h2>
        <Row>
            <Col>
            <HavsNiva />
            </Col>
            <Col>
                <p >
                SMHI skriver att det senaste århundradet har det globala medelvattenståndet stigit. I framtiden kommer takten på denna höjning öka när klimatet fortsätter att bli varmare. Den globala förändringen av havsnivån har även inverkan på vattenstånden längs Sveriges kust ( SMHI)
                Vad händer på längre sikt?
                Även om utsläppen av växthusgaser skulle upphöra idag så skulle de flesta aspekter av klimatförändringen vara bestående under många århundraden framöver. På dessa längre tidskalor blir det ännu tydligare att våra nuvarande och framtida utsläpp av växthusgaser har en mycket stor betydelse. Den globala havsnivån kommer att fortsätta stiga i hundratals till tusentals år och därefter förbli förhöjd i tusentals år. Det beror på att den termiska expansionen och avsmältningen av glaciärer och inlandsisar är tröga processer. Det tar mycket lång tid för dessa processer att komma i jämvikt med den befintliga temperaturökningen även om utsläppen av växthusgaser begränsas kraftigt

                </p>
            </Col>
        </Row>

    
        </Container>   
    
    </div>
  );
}

export default  HavsNivaText;