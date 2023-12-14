import KalenderCard from "./KalenderCard";


function Kalender() {
    return (
<div class="p-5" style={{backgroundColor:'#304742'}}>
<div>
    <h2 className="text-center p-3" style={{color:'#FDFAF2'}}>Kommande Workshop</h2>
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