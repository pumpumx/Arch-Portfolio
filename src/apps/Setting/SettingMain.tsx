import {useRef } from "react"
import React from "react"
import AppHeader from "../AppHeader"
import Draggable from "react-draggable"
import SettingSideBar from "./SettingSideBar"
import ChangeWallpaper from "./ChangeWallpaper"
import { useSettingStore } from "../../store/settingStore"
import { useOpenApp } from "../../store/openAppStore"
const changeWallpaperComponentMap:Record<string , React.FC> = { 
  'Change Wallpaper':ChangeWallpaper,
}


function SettingMain() {
  const getMinimized = useOpenApp.getState().AppName[2].minimized
   const dragRef = useRef<HTMLDivElement>(null)
   const currentPage = useSettingStore((state)=>state.pageName)
  return (
   <>  
        <Draggable nodeRef={dragRef as React.RefObject<HTMLElement>} offsetParent={document.body}  >
          <div className={ `${getMinimized?"w-[50vw] h-[70vh]":"w-[95vw] h-[100vh]"} transition-all ease-out absolute shadow-[0px_0px_50px_1px_black]`} ref={dragRef} >
            <AppHeader appIcon="/icons/chrome.svg" appName="Setting" />
            <div className="w-full h-full flex-row flex relative bg-neutral-800 ">
              <div className="w-[20%] h-full">
                <SettingSideBar/>
              </div>
              <div className="min-w-[80%] h-full bg-neutral-800">
                      {changeWallpaperComponentMap[currentPage] && React.createElement(changeWallpaperComponentMap[currentPage])}
              </div>
            </div>
          </div>
        </Draggable>
    </>
  )
}

export default SettingMain