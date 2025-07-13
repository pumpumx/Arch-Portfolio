import type React from "react";
import { create } from "zustand";
import TerminalInput from "./TerminalInput";
import { availableCommands } from "./terminalLogic";

type OutBoxCmd = {
   cmdControls:{outputBox:string,inputElement:React.FC}[],
   executeCommand:(cmdOutPut?:string)=>void,
   clearTerminal:()=>void,
   helpFunction:()=>void,
   defaultFunction:()=>void
}

export const useTerminalStore = create<OutBoxCmd>((set)=>({
    cmdControls:[{
        outputBox:"",
        inputElement:TerminalInput,
        focus:true  
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
    ),
    clearTerminal:()=>{
        set((state)=>({
            cmdControls: state.cmdControls.splice(0)
        }))
    },
    helpFunction:()=>{
        set((state)=>({
            cmdControls:[
                ...state.cmdControls,
                {
                    outputBox:availableCommands,
                    inputElement:TerminalInput
                }
            ]
        }))
    },
    defaultFunction:()=>{
        set((state)=>({
            cmdControls:[
                ...state.cmdControls,
                {
                    outputBox:"No such Command found , using help might help",
                    inputElement:TerminalInput
                }
            ]
        }))
    }
}))