

import styles from '../Fonts.module.css'; // Import your CSS module
import Synka from '../buttons/Synka';

function SynkaHel() {
    return(
        <div style={{backgroundColor:'#BCD0A5', width:'100%'}} className='pb-3 d-flex justify-content-center '>
            
            <div class="d-flex justify-content-center block-example border border-dark p-3"style={{backgroundColor:'#FDFAF2', width:'80%'}} >
                <div  > 
                  
                <p className={`${styles.openSans} ${styles.bold} ${styles.p} pb-1 text-center` } style={{color:'#304742'}}>Synka alla event till din kalender</p>
                        <p className={`${styles.openSans} ${styles.p}`} > 
                      Öppna din personliga kalender, exempelvis Google eller Apple Kalender, och lägg till vår kalender genom att klistra in länken. Nu synkas automatiskt våra workshops med din kalender. En smidig lösning för att hålla dig uppdaterad om kommande händelser och möten. Gör ditt liv enklare och missa aldrig ett viktigt evenemang igen!
                        </p> 
                        <div class="d-flex justify-content-center p-1 " >
                        <Synka />
                        </div>    
                </div>

               
            </div>
           
            
        </div>
    )
}export default SynkaHel;