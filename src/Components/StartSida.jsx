import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../Fonts.module.css'; 
import Kalender from './Kalender';
import SynkaHel from './SynkaHel';
import QuizRuta from './QuizRuta';


function StartSida() {
    return(
        <div style={{backgroundColor:'#FDFAF2', width:'100%'}}>
            <Container style={{color:'304742',}}className='p-3'>
            <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1} text-center mt-5`}> Välkommen till Klimatkompassen</h1>
            <p className={`${styles.openSans} ${styles.p} pt-4`}>Här på vår webbplats samlas vi, en grupp engagerade pensionärer, för att utforska och lära oss mer om klimatförändringar och hur vi kan göra positiva bidrag till en hållbar framtid. Vi tror på kraften hos gemenskapen och erfarenheterna vi har samlat på oss under åren. Vi är fast beslutna att dela med oss av vår kunskap och lära oss tillsammans.
                Genom inspirerande artiklar, lärorika workshops och öppna diskussioner strävar vi efter att öka medvetenheten om klimatutmaningarna och främja hållbara levnadssätt. Vår vision är att inte bara förstå problemen, utan också att vara en del av lösningen. Vi tror att små handlingar kan göra en stor skillnad.
                Oavsett om du är nyfiken nybörjare eller en erfaren miljöentusiast är du välkommen att delta i våra aktiviteter, dela dina egna insikter och tillsammans skapa en plats där vi kan växa och inspirera varandra. Tillsammans kan vi göra skillnad och bidra till en grönare och mer hållbar värld för kommande generationer.
                Välkommen till vår gemenskap för en hållbar och klimatsmart pensionärslivsstil!</p>
            </Container>
            <div style={{backgroundColor:'#304742', width:'100%', height:'32rem', color:'#FDFAF2'}} >
                <Row >
                    <Col>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-4 text-center`}>Vad är en Workshop?</h4>
                    <p className={`${styles.openSans} ${styles.p} p-5`}>En workshop är en interaktiv och engagerande träff eller session där deltagarna aktivt deltar i praktiska övningar, diskussioner och aktiviteter med målet att lära sig nya färdigheter, öka kunskapen eller samarbeta för att lösa specifika problem. Workshops kan variera i format och ämnen och kan vara allt från kreativa övningar och problemlösningsgrupper till mer strukturerade utbildningssessioner</p>
                    </Col>
                    <Col style={{backgroundImage:'url(https://img.freepik.com/free-photo/senior-people-school-during-class-with-laptop-computer_23-2150105015.jpg?w=1480&t=st=1703353120~exp=1703353720~hmac=f238986464b225cafb681d5ba0b5e0f7b7a8b8e71e7813a6b5e0a6f443420432)', backgroundSize:'cover',
                    backgroundPosition: 'center',height:'32rem'}}>

                    </Col>
                    <Col>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-4 text-center`}>Vad handlar våra workshops om?</h4>
                    <p className={`${styles.openSans} ${styles.p} p-5`}>Våra workshops är dedikerade till att öka förståelsen för klimatförändringar och inspirera till handling för en hållbar framtid. Genom interaktiva och engagerande sessioner vill vi skapa en plattform där deltagarna kan lära sig mer om klimatets påverkan, utforska hållbara lösningar och gemensamt bidra till en positiv förändring</p>
                    </Col>
                </Row>
            </div>
            < Kalender/>
            <SynkaHel />
            <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2} pt-5 text-center`} style={{color:'#304742'}}> Månadens utmaning</h2>
            <div style={{backgroundColor:'#567B5D', width:'100%', height:'32rem', color:'#FDFAF2'}} >
                <Row >
               
                    <Col>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-4 text-center`}>Vi utmanar dig!</h4>
                    <p className={`${styles.openSans} ${styles.p} p-5`}>Vi på Klimatkompassen håller i månadens utmaning. utmaningen är tillför att öka medlemmarnas medvetenhet om klimatsmarta val via ett sprcifikt ämne under en månad. Genom en initiativrik och inspirerande Målet är att uppmuntra medlemmarna att göra hållbara val. Medlemmarna har även möjlighet att diskutera och komma med tips och råd i vårt diskutionsforum här på webbplatsen. </p>
                    </Col>
                    <Col style={{backgroundImage:'url(https://img.freepik.com/free-photo/hands-holding-clay-globe-planet-earth_53876-71151.jpg?w=1480&t=st=1703337637~exp=1703338237~hmac=2e7df88ec85051cb0858fcf5c7831240084bdf41109b4e2c3568adb8fad7b51b)', backgroundSize:'cover',
                    backgroundPosition: 'center',height:'32rem'}}>

                    </Col>
                    <Col>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} p-4 text-center`}>Testa hur klimatvänliga dina matvanor är</h4>
                    <p className={`${styles.openSans} ${styles.p} p-5`}>Varje dag under månaden presenteras medlemmarna för en ny utmaning relaterad till hållbara kostvanor. Det kan vara allt från att prova vegetariska recept till att göra medvetna val när det gäller lokalt och säsongsmässigt producerade livsmedel. Våra workshops följer samma tema för att inspirera och diskutera möjligheten att förändras. </p>
                    </Col>
                </Row>
            </div>
            <QuizRuta />
          <div className='p-5 mt-5'>
            <Container className='d-flex justify-content-center' style={{height:'30rem'}}>
                <Row >
                    <Col className='border border-dark'>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4} pt-3 text-center`}>Visste du att?</h4>
                    <p className={`${styles.openSans} ${styles.p} ${styles.bold} p-5 m-2`}>Vätgas är en energibärare som kan användas för att transportera, lagra och tillhandahålla energi, precis som elektricitet</p>
                    </Col>
                    <Col style={{backgroundColor:'#304742', color:'#FDFAF2'}}>
                    <h4 className={`${styles.poppins} ${styles.bold} ${styles.h4}  pt-3 text-center`}> Karlstad energi satsar på vätgasproduktion</h4>
                    <p className={`${styles.openSans} ${styles.p} pt-3`}>Karlstads Energi har tagit ytterligare ett steg mot att bygga en anläggning för produktion av vätgas </p>
                    <p className={`${styles.openSans} ${styles.p} ${styles.bold} pt-2 text-center`}>"Tillsammans kan vi ligga i framkant och skapa en komplett värdekedja för vätgas i regionen med Karlstad som hubb"
                         säger Erik Kornfeld, vd på Karlstads Energi. </p>
                    </Col>
                    <Col style={{backgroundImage:'url(https://img.freepik.com/free-photo/beautiful-shot-wind-turbines-cloudy-sky-eiffel-region-germany_181624-7922.jpg?w=1480&t=st=1703341629~exp=1703342229~hmac=8e81ac13a3bcb3c35ecd34ef095d6c8cea621f486966362f645d295590fa2b25)', backgroundSize:'cover',
                    backgroundPosition: 'center',height:'30rem'}}>
                    </Col>
                </Row>
            </Container>

          </div>
        </div>
    )
}export default StartSida;