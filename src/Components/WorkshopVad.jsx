import AnmalaWorkshop from "./buttons/anmalaworkshop";
import KontaktCard from "./KontaktCard";
import KontaktButton from "./buttons/kontaktButton";

function WorkshopVad() {
    return(
        <div style={{backgroundColor:'#FDFAF2', 
        width:'100%'}}>
            <div >
        <div class="d-flex justify-content-center" >
            <div style={{color:'#304742', width:'70%'}}> 
                <h1 className="">Vad är en Workshop?</h1>
                <p className={`${styles.openSans} ${styles.p}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
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