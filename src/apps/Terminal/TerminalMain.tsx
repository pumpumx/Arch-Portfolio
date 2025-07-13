import React from "react"
import { useRef } from "react"
import AppHeader from "../AppHeader"
import Draggable from "react-draggable"
import { useTerminalStore } from "./TerminalStore"


function Konsole(): React.ReactElement { //Need to create an output box!! 
  const dragRef = useRef<HTMLDivElement>(null)

  const commandHistory = useTerminalStore((state)=>state.cmdControls)

  return (
    <>
      <Draggable nodeRef={dragRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
        <div className={`w-[50vw] h-[90vh] absolute  shadow-[0px_0px_50px_1px_black]`} ref={dragRef} >
          <AppHeader appIcon="/icons/konsole.svg" appName="Konsole" />
          <div className="w-full h-full relative overflow-y-scroll bg-[#222526]">
           {commandHistory.map((value,index)=>(
             <div key={index} className="w-full  bg-[#222526] overflow-y-hidden">
               <div className="text-green-500 text-xs overflow-x-hidden"><pre>{value.outputBox}</pre></div>
              {React.createElement(value.inputElement)}
            </div>
           ))}
          </div>
        </div>
      </Draggable>
    </>
  )
}

export default Konsole
