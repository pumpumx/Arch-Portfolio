import { appIcons } from "../mainScreen/mainScreenConstants"
import IconReuse from "./icon"
function AppIcon() {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col h-full ">
        {appIcons.map((val, index: number) => (
          <IconReuse id={index.toString()} iconImage={val.iconLink} name={val.name}>
          </IconReuse>
        ))}
      </div>
    </div>

  )
}

export default AppIcon