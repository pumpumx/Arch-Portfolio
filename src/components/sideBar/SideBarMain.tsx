import { useState } from "react"
import SearchScreen from "./SearchScreen"
import { createPortal } from "react-dom"


const sideBarApps = [
  {
    name: "chrome",
    link: "icons/chrome.svg"
  }
]

function SideBarMain() {

  const [openMainBar, setMainBar] = useState<boolean>(false)

  const openMainBarHandler = () => {
    setMainBar(!openMainBar)
    console.log("Ok running")
  }

  return (
    <div className='w-[7vh] z-20 h-full flex flex-col relative items-center justify-start pt-5 bg-black/50 shadow-lg ring-1 ring-black/5 '>
      {sideBarApps.map((val, index) => (
        <div id={index.toString()} className="w-[55px] h-[55px] rounded-lg hover:bg-white/10 flex items-center justify-center">
          <div className="bg-contain w-[40px]  h-[40px] bg-center" style={{ backgroundImage: `url(${val.link})` }}>
          </div>
        </div>

      ))} 
      <div className="absolute bottom-5 w-[55px] h-[55px] rounded-lg hover:bg-white/10 flex items-center justify-center" onClick={openMainBarHandler}>
        <div className=" bg-cover w-[40px] h-[40px]" style={{ backgroundImage: `url('icons/grid.png')` }} >
        </div>
      </div>
      {openMainBar && createPortal(<SearchScreen/>,document.body)}
    </div>
    
  )
}

export default SideBarMain