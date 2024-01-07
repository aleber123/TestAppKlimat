
import Container from 'react-bootstrap/Container';
import styles from '../Fonts.module.css'; 
import Starta from './buttons/StartaQuiz';


function QuizRuta() {
    return(
        <div style={{backgroundColor:'#304742',color:'#FDFAF2', width:'100%'}} className='pb-3 d-flex justify-content-center '>
            
            <Container class="d-flex justify-content-center block-example border border-dark p-3"style={{ width:'80%'}} >
                <div  > 
                  
                <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} p-5 text-center` } >Testa hur klimatvänliga dina matvanor är</h3>
                        <p className={`${styles.openSans} ${styles.p}`} > 
                            Med det här quizet kan du testa ditt klimatavtryck kopplat till dina matvanor. Efter testet kommer du att få en uppskattad bild av hur miljövänliga dina matvanor är i relation till medelsvensken. Du kommer även att få förbättringsförslag över hur du kan göra mer klimatsmarta val i din vardag. 
                            Testet beräknas att ta mellan 3 - 5 minuter att besvara och består av tio frågor. Du kan när som helst välja att avbryta testet. Klicka på start så börjar vi!
                        </p> 
                        <div class="d-flex justify-content-center p-1 " >
                        <Starta />
                        </div>    
                </div>

               
            </Container>
           
            
        </div>
    )
}export default QuizRuta;