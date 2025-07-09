import { useRef, useState } from "react"
import AppHeader from "../AppHeader"
import Draggable from "react-draggable"

// type cmdMessage = { Message controller 
//   cmd: { cmd: string, message: string }[];
// }

// const commandMessagesc: cmdMessage = {
//   cmd: [
//     {
//       cmd: "ls",
//       message: ""
//     }
//   ]
// }

function Konsole(): React.ReactElement {
  const dragRef = useRef<HTMLDivElement>(null)
  const [command, setCommand] = useState<string>("123")
  const newInputLine = useRef(null)
  const keyPressHandler = (e: React.KeyboardEvent) => {

    if (e.key === "Enter") {
      //Write the enter key logic 
      console.log("set Command", command)

    }
  }

  return (
    <>
      <Draggable nodeRef={dragRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
        <div className={`w-[50vw] h-[70vh] absolute shadow-[0px_0px_50px_1px_black]`} ref={dragRef} >
          <AppHeader appIcon="/icons/konsole.svg" appName="Konsole" />
          <div className="w-full h-full relative bg-neutral-800">
            <div className="w-full h-full bg-[#222526] overflow-y-hidden">
              <span className="w-full px-1 mt-2 h-[3vh] flex  items-center " ref={newInputLine}>
                <div className="hostName">
                  <p className="font-bold text-sm text-white ">pumpum@devProd: </p>
                </div>
                <div className="w-[85%] h-full flex items-center justify-center " onKeyDown={(e) => keyPressHandler(e)}>
                  <input type="text" className="w-full indent-1 text-semibold barlow-light outline-none border-none text-white caret-white "
                    onChange={(e) => setCommand(e.target.value)}
                    value={command}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  )
}

export default Konsole
