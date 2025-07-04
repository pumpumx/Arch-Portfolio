import { useState } from "react"
import usePageNavigator from "../../store/aboutMeStore"


const navBarNames = [ //Make it a global State
  {
    name:'About Me'
  },
  {
    name:'Skillset'
  },
  {
    name:'Projects'
  },
  {
    name:'Education'
  }
  ,{
    name:'Resume'
  }
]


function NavigationBar() {
  const [isCollapsed, setIsCollapased] = useState<boolean>(false)

  const collapseHandler = () => {
    setIsCollapased(!isCollapsed)
  }
  const changePageName = usePageNavigator((state)=>state.changePageName)
  return (
    <>
      <div className="w-[25px] hover:cursor-pointer z-20 h-[25px] bg-neutral-700 flex items-center
       justify-center rounded-lg absolute top-1 left-1 hover:bg-blue-700 transition-all ease-in bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700" onClick={()=>collapseHandler()}>
        <div className="w-[20px] h-[20px] bg-contain bg-center" style={{ backgroundImage: `url(/icons/navbarIcon.svg)` }}>
        </div>
      </div>
      {isCollapsed && 
        <div className={`absolute  ${isCollapsed ? "opacity-100 transition-all ease-in ":"opacity-0"} 
        top-[30px] rounded-md  w-[10vw] left-1 h-[15vh] text-xs lg:text-lg text-white/90 bg-black/50 p-1 font-bold  flex flex-col items-center justify-around`}>
            {navBarNames.map((val,index)=>(
              <div key={index} onClick={()=>changePageName(val.name)} className="w-full h-[3vh] flex rounded-md items-center justify-center text-center hover:bg-blue-600 ease-in transition-all font-semibold hover:">
                <span className="w-full cursor-pointer "><p>{val.name}</p></span>
              </div>
            ))}
        </div>
        }


    </>
  )
}

export default NavigationBar