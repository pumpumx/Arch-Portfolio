import { useEffect, useRef } from "react"
import gsap from "gsap";


function loaderAnimation(ref:React.RefObject<null>){
  if(!ref.current) return;

  const tl = gsap.timeline({onComplete(){
    //Navigating to the main window logic 
    console.log("Animation completed")
    
  }})

  tl.fromTo(ref.current ,{rotate:0},{rotate:720, duration:2 , ease:'power1.inOut'})
}

function LoadingAnimation() {                                       
  const loadRef = useRef(null)

  useEffect(()=>{ 
    loaderAnimation(loadRef)
  },[])

  return (
    <div ref={loadRef} className="w-[60px] h-[60px] rounded-[150%] bg-transparent border-6 border-white/20 border-t-white">
    </div>
  )
}

export default LoadingAnimation