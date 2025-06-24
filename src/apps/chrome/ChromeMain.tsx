import { useRef } from "react"
import AppHeader from "../AppHeader"
import Draggable from "react-draggable"
function Chrome():React.ReactElement{
  const chromeUrl:string = "https://www.google.com/webhp?igu=1"
  const dragRef = useRef<HTMLDivElement>(null) 
  
  return (
    <>
      <Draggable nodeRef={dragRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
       <div className="w-[50vw] h-[70vh] absolute " ref={dragRef}>
      <div>
        <AppHeader appIcon="/icons/chrome.svg" appName="Chrome"/>
      </div>
        <div className="w-full h-full ">
            <iframe src={chromeUrl} className="w-full h-full"></iframe>
        </div>
    </div>
    </Draggable>
    </>
    
   
  )
}

export default Chrome