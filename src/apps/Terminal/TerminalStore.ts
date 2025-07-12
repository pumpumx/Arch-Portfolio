import type React from "react";
import { create } from "zustand";
import TerminalInput from "./TerminalInput";
import { asciiArt } from "./terminalLogic.ts";


type OutBoxCmd = {
   cmdControls:{outputBox:string,inputElement:React.FC}[],
   executeCommand:(cmdOutPut?:string)=>void
}

export const useTerminalStore = create<OutBoxCmd>((set)=>({
    cmdControls:[{
        outputBox:asciiArt,
        inputElement:TerminalInput
    }],
    executeCommand:(cmdOutPut?:string):void =>(
         set((state)=>({
            cmdControls: [
                ...state.cmdControls,
                {
                    outputBox:cmdOutPut || '',
                    inputElement:TerminalInput
                }
            ]
         }))
    )
}))