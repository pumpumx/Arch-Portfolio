import { appIcons } from "../mainScreen/mainScreenConstants"
import IconReuse from "./icon"
function SideAppBar() {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col h-full ">
        {appIcons.map((val, index: number) => (
          <IconReuse id={index.toString()} iconImage={val.iconLink} name={val.name} refLink={val.refLink} >
          </IconReuse>
        ))}
      </div>
    </div>

  )
}

export default SideAppBar