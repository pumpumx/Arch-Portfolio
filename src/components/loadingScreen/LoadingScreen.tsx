import LoadingAnimation from "./LoadingAnimation"

function LoadingScreen() {
  
  return (
    <>
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="w-[50%] h-[80%] flex flex-col items-center justify-center bg-black">
          <div className="w-[80%] h-[50%] flex items-end justify-center">
            <img src="src/assets/arch.png" alt="" className="bg-contain"/>
          </div>
         <div className="w-[80%] h-[50%]  flex items-center mb-10  justify-center">
            <LoadingAnimation/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingScreen