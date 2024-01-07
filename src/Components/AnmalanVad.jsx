
import styles from '../Fonts.module.css'; 


function AnmalanVad() {
    return(
        <div style={{backgroundColor:'#FDFAF2', width:'100%'}}>
            
            <div class="d-flex justify-content-center p-5" >
                <div style={{color:'#304742', width:'70%'}} className="pt-5"> 
                    <h1 className={`${styles.openSans} ${styles.bold} ${styles.h1}`} style={{color:"#304742"}}>Hur anmäler jag mig till en Workshop?</h1>
                    <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} pt-3`}>Så här anmäler du dig</h3> 
                        <p className={`${styles.openSans} ${styles.p}`} >
                            För att anmäla dig till vår workshop, vänligen fyll i nedanstående formulär. Det tar bara några minuter, och vi ser fram emot att välkomna dig till vår gemenskap!
                        </p>  

                        <h3 className={`${styles.openSans} ${styles.bold} ${styles.h3} pt-3`}>Har du frågor eller behöver hjälp?</h3> 
                        <p className={`${styles.openSans} ${styles.p}`} >
                        Vi finns här för att hjälpa dig! Om du har några frågor eller om du behöver hjälp med anmälningsprocessen, vänligen kontakta oss .
                        Tack för ditt intresse, och vi ser fram emot att dela denna minnesvärda workshop-upplevelse med dig!
                        </p>  
                </div>
            </div>
           
            
        </div>
    )
}export default AnmalanVad;

