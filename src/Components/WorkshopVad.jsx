import AnmalaWorkshop from "./buttons/anmalaworkshop";
import KontaktCard from "./KontaktCard";
import KontaktButton from "./buttons/kontaktButton";
import KontaktaOss from "./kontaktaOss";
import styles from '../Fonts.module.css'; // Import your CSS module

function WorkshopVad() {
    return(
        <div style={{backgroundColor:'#FDFAF2', 
        width:'100%'}}>


            <div >
        <div class="d-flex justify-content-center" >
            <div style={{color:'#304742', width:'70%'}} className="pt-5"> 
                <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1}`}>Vad är en Workshop?</h1>
              <p className={`${styles.openSans} ${styles.p}`} >Workshop är ett effektivt verktyg för att främja lärande och samarbete. Vi använder workshop tillfällena för att utbilda och umgås. Vi blandar lärande med diskussioner och aktiviteter för att hitta innovativa problemlösningar. 
Du väljer själv på vilken nivå du önskar att delta i våra workshop, allt från ett aktivt deltagande till åhörare. Vi uppmuntrar till att alla deltagare får möjlighet att dela sina åsikter, erfarenheter och insikter med varandra, vilket skapar ett trevligt socialt tillfälle att umgås. 
Våra workshops leds av grundarna för projektet, ibland sammarbetar vi med gästföreläsare eller andra experter vilka bidrar till att varje workshop blir unik.  
</p>  
            </div>
        </div>
        <div class="d-flex justify-content-center p-5"  >
        <AnmalaWorkshop/>  
        </div>
        <h3 className="text-center">Det är vi som ansvarar för Workshop</h3>
        <div className="d-flex justify-content-center pt-3"> 
        <KontaktCard/>
        <KontaktCard/>
        </div>
        <div className="d-flex justify-content-center p-5 ">
        <KontaktButton/>
        </div>
        
</div>
        </div>
    )
}export default WorkshopVad;