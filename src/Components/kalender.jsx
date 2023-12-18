import KalenderCard from "./KalenderCard";
import styles from '../Fonts.module.css'; // Import your CSS module


function Kalender() {
    return (
<div class="p-5" style={{backgroundColor:'#304742'}}>
<div>
    <h2 className={`${styles.poppins} ${styles.bold} ${styles.h2} text-center p-3 ` } style={{color:'#FDFAF2'}}>Kommande Workshop</h2>
</div>
<div class="d-flex justify-content-center">
        <div class="d-flex justify-content-between" style={{width:'80%'}} >
    
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        </div>
        </div>
</div>
    );
}export default Kalender;