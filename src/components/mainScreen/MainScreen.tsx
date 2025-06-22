import kiteImg from '../../assets/kite.jpg'
function MainScreen() {
    return (
        <>
            <div className="w-full h-screen bg-cover bg-center" 
            style={{backgroundImage:`url(${kiteImg})`}}>

            </div>
        </>

    )
}

export default MainScreen