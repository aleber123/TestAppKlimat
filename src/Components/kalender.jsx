import KalenderCard from "./KalenderCard";


function Kalender() {
    return (
<div class="d-flex justify-content-center p-5">
        <div class="d-flex justify-content-between" style={{width:'80%'}} >
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        <KalenderCard/>
        </div>
</div>
    );
}export default Kalender;