import { useOpenApp } from "../../store/openAppStore"
import { appIcons } from "../mainScreen/mainScreenConstants"
import IconReuse from "./icon"




function SideAppBar() {
  const toggleApp = useOpenApp((state)=>state.toggleApp);
  return (
    <div className="flex justify-end">
      <div className="flex flex-col h-full ">
        {appIcons.map((val, index: number) => (
          <div key={index} onDoubleClick={()=>toggleApp(val.name , val.state? val.state:"" , true)}>
            <IconReuse id={index} iconImage={val.iconLink} name={val.name} refLink={val.refLink} >
          </IconReuse>
          </div>  
          
        ))}
      </div>
    </div>
  )
}

export default SideAppBar