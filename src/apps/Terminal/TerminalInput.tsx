import React, { useState } from 'react'
import { useTerminalStore } from './TerminalStore'
import { neofetch } from './terminalLogic'

function TerminalInput(){

    const [command , setCommand] = useState<string>()
    const updateTermianl = useTerminalStore((state)=>state.executeCommand)
    const clearTerminal = useTerminalStore((state)=>state.clearTerminal)
    const helpCommand = useTerminalStore((state)=>state.helpFunction)
    const defaultFunction = useTerminalStore((state)=>state.defaultFunction)
    const keyPressHandler = (e: React.KeyboardEvent) => {
    
        if (e.key === "Enter") {
          e.preventDefault()

          switch(command?.trim().toLowerCase()){
            case "neofetch":
                const val = neofetch()
                updateTermianl(val)
                break;
            case "clear":
                clearTerminal()
                break;
            case "help":
                helpCommand()
                break;
            default:
                defaultFunction()
                break;
          }
          console.log("set Command", command)
        }
      }
    
    return (
        <span className="w-full px-1 mt-2 h-[3vh]  flex  items-center " >
            <div className="hostName">
                <p className="font-bold text-sm text-white ">pumpum@devProd: </p>
            </div>
            <div className="w-[85%] h-full flex items-center justify-center " onKeyDown={(e) => keyPressHandler(e)}>
                <input type="text" className="w-full indent-1 text-semibold barlow-light outline-none border-none text-white caret-white"
                    onChange={(e) => setCommand(e.target.value)}    
                    value={command}
                />
            </div>
        </span>
    )
}

export default TerminalInput