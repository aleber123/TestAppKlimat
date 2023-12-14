import Card from 'react-bootstrap/Card';
function MallEtt() {
    return (
<div style={{backgroundColor:'#FDFAF2'}}  >
<div class="d-flex justify-content-center p-5">
    <div class="d-flex justify-content-between" style={{width:'70%'}}>
<Card style={{ width: '18rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
      <Card.Body>
        <Card.Title className='text-center'><h3>Vad är en Workshop?</h3></Card.Title>
        <Card.Text className='text-center pt-5'>
          <p>Genom att läsa vad en workshop innebär kan du lätt förbereda dig för kommande träff</p>. 
        </Card.Text>
      </Card.Body>
</Card>  
<Card style={{ width: '18rem', backgroundColor:'#567B5D',color:'FDFAF2'  }}>
      <Card.Body>
        <Card.Title className='text-center'><h3>Hur anmäler jag mig?</h3></Card.Title>
        <Card.Text className='text-center pt-5'>
        <p>Här finns all information du behöver för att anmäla dig till en av våra workshop.</p>
        </Card.Text>
      </Card.Body>
</Card>
<Card style={{ width: '18rem', backgroundColor:'#567B5D',color:'FDFAF2' }}>
      <Card.Body>
        <Card.Title className='text-center'><h3>När är nästa Workshop?</h3></Card.Title>
        <Card.Text className='text-center pt-5'>
          <p>Missa inte ett tilfälle att träffas och prata om miljön.</p>
        </Card.Text>
      </Card.Body>
</Card>
</div>
</div>
</div>
    );
}export default MallEtt;