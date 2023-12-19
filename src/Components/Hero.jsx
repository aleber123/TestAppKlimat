import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; // Import your CSS module
import Form from 'react-bootstrap/Form';


function Hero() {
  return (
<div style={{backgroundColor:"#FDFAF2"}}>
<Container >
<h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center`}> Här är ditt resultat</h1>
</Container>
<Container className='p-3'>

<Row>
<Col>
<img src="https://i.ibb.co/C50Ncm6/Milj-hj-lte.png  " alt="Hero" border="0" />
</Col>
<Col>
<h2 className={`${styles.poppins} ${styles.bold} ${styles.h2} pt-6`}>Du är en Miljöhjälte</h2>
<p className={`${styles.openSans} ${styles.p} pt-4`}> Du blev miljöhjälten! Du gör många kloka val idag kopplat till din kost. Bra jobbat! Vi vill ändå ge dig några tips om det är så att du vill göra ännu fler förbättringar i din vardag. Men kom ihåg - du behöver inte göra allt. Vi tycker det är viktigare att anpassa sin livsstil till en jämn nivå som vi klarar av än att lägga ribban för högt och minska ner på hållbara förändringar bara för att vi inte orkar upprätthålla dem.</p>
<div>
<hr></hr>
<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><p className={`${styles.openSans} ${styles.p}`}>Få ditt resultat på mail</p></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
</Form>
</div>
</Col>
</Row>
</Container>
<Container>
<h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} pt-3`}>Förbättringsförslag</h3>
<h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} pt-4`}>Minska ditt matsvinn</h4>
<p className={`${styles.openSans} ${styles.p} pt-3`}> Planera en dag i veckan där du går igenom kyl, frys och skafferi
Det finns olika saker vi kan göra för att minska vårt matsvinn. Ett råd är att gå igenom kyl, frys och skafferi regelbundet varje vecka. Dels för att inte råka handla sådant du redan har hemma och dels för att planera middagar efter mat som är på väg att nå bäst före datum eller har kort hållbarhet. Välj en dag i veckan och gör dig påmind genom att skriva upp i kalendern eller lägga en notis i mobilen. 
</p>     
<h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} pt-4`}>Vegetariskt</h4>
<p className={`${styles.openSans} ${styles.p} pt-3`}> Inför vegetariska dagar
Testa att laga mer vegetariskt och byt ut kött mot baljväxter och andra vegetabiliska protein. Utgå från där du befinner dig idag. Om du äter vegetariskt en dag i veckan, testa att växla upp till två dagar i veckan. Om du nästan aldrig äter vegetariskt - välj en veckodag och testa dig fram tills att du hittar vegorecept som du gillar!
</p>
<h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} pt-4`}>Miljömärkningar</h4>
<p className={`${styles.openSans} ${styles.p} pt-3`}> 
Vill du ha en läxa? Läs då på om de olika miljömärkningar som finns. Här är en bra källa som vi rekommenderar: www.ekoappen.se/guide-vad-betyder-miljomarkningen
Därefter, börja titta efter dessa miljömärkningar när du handlar. Det är inte alltid vi har råd eller möjlighet, men när det går välj varor med miljömärkningar framför varor utan. Om du har gjort din läxa så vet du att det gör stor skillnad!
</p>
</Container>
</div>
  );
}

export default Hero;