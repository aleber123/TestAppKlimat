import AnmalaWorkshop from "./buttons/anmalaworkshop";

function HeaderBild() {
    return (
<div >
        <div style={{backgroundImage: 'url(https://img.freepik.com/free-photo/environmental-conservation-garden-children_1150-15276.jpg?w=1480&t=st=1702479325~exp=1702479925~hmac=9754f7f356af68a0c1c6a71d84116456c0d96d09d63f98f7b6d07ac4546af52f)', 
            width:'100%', 
            height:'40rem',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <div style={{color:'#FDFAF2', width:'100%', marginLeft:'60rem',paddingTop:'15rem'}}> 
                <h1>Väck passionen för planeten</h1>
                <p className="p-2">Skapa en grönare framtid för nästa generation</p>
                <AnmalaWorkshop/>
            </div>  
        </div>
</div>
    );
}export default HeaderBild;