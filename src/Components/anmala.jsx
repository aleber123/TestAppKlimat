import styles from '../Fonts.module.css'; // Importera dina CSS-moduler för typsnitten

function anmala() {
    return(
        <div className=" PT-5"style={{backgroundColor:'#BCD0A5', 
        width:'100%'}}>
            <div >
        <div class="d-flex justify-content-center" >
            <div style={{color:'#304742', width:'70%'}}> 
                <h2 className=""> Information om anmälan till Workshop </h2>
                <p className={`${styles.openSans} ${styles.p}`}>Brödtext</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
            </div>
        </div>
        <div class="d-flex justify-content-center pt-3" >
            <div style={{color:'#304742', width:'70%'}}> 
                <h2 className=""> Vad kommer Workshopen att handla om </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
            </div>
        </div>
        
</div>
        </div>
    )
}export default anmala;