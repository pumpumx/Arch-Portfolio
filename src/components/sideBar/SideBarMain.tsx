import { useState } from "react"
import { useOpenApp } from "../../store/openAppStore"


const sideBarApps = [
  {
    name: "Chrome",
    link: "icons/chrome.svg",
    state1:'opened'
  },
  {
    name: "Konsole",
    link: "icons/konsole.svg",
    state1:'opened'
  },
  {
    name: "About-me",
    link: "icons/folder.svg",
    state1:'opened'
  },
  {
    name: "Setting",
    link: "icons/setting.svg",
    state1:'opened'
  },
  
]

function SideBarMain() {

  const [openMainBar, setMainBar] = useState<boolean>(false)

  const openMainBarHandler = () => {
    setMainBar(!openMainBar)
    console.log("Ok running")
  }

  const toggleOpenApp = useOpenApp((state)=>state.toggleApp);


  return (
    <div className='w-[7vh] z-20 h-full flex flex-col relative items-center justify-start pt-5 bg-black/50 shadow-lg ring-1 ring-black/5 '>
      {sideBarApps.map((val, index) => (
        <div key={index} id={index.toString()} className="w-[55px] h-[55px] rounded-lg hover:bg-white/10 flex items-center justify-center" onDoubleClick={()=>toggleOpenApp(val.name , val.state1 , true)}>
          <div className="bg-contain w-[40px]  h-[40px] bg-center" style={{ backgroundImage: `url(${val.link})` }}>
          </div>
        </div>

      ))} 
      {/* <div className="absolute bottom-5 w-[55px] h-[55px] rounded-lg hover:bg-white/10 flex items-center justify-center" onClick={()=>openMainBarHandler()}> Might work on it later but not now
        <div className=" bg-cover w-[40px] h-[40px]" style={{ backgroundImage: `url('icons/grid.png')` }} >
        </div>
      </div>
      {openMainBar && createPortal(<SearchScreen/>,document.body)} */}
    </div>
  )
}

export default SideBarMain