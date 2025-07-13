import SideAppBar from '../icons-app/sideAppBar'
import Topbar from '../topbar/Topbar'
import ContextMenu from '../../custom-hooks/DisableContextMenu'
import SideBarMain from '../sideBar/SideBarMain'
import React from 'react'
import Chrome from '../../apps/chrome/ChromeMain'
import { useChangeWallpaper, useOpenApp } from '../../store/openAppStore'
import AboutMeMain from '../../apps/about-me/AboutMeMain'
import Konsole from '../../apps/Terminal/TerminalMain'
import SettingMain from '../../apps/Setting/SettingMain'

const appComponentMap:Record<string , React.FC> = {
    Chrome:Chrome,
    'About-me':AboutMeMain,
    'Konsole':Konsole,
    'Setting':SettingMain
}

function MainScreen() {

    const appState = useOpenApp((state)=>state.AppName)
    const bgImageLink = useChangeWallpaper((state)=>state.bgImageLink)
    const isWinOnTop = useOpenApp((state)=>state.bringAppWindowOnTop)
    return (
        <>
            <div className="w-full min-h-screen max-h-[100vh] bg-center overflow-x-hidden bg-cover  "  style={{backgroundImage:`url(${bgImageLink})`}}>
                <div className='w-full h-[5vh] bg-[#1c202b]/90 z-20'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex z-0 bg-cover justify-between relative overflow-x-hidden overflow-y-hidden ' id='portal'  >  
                    <div className='min-w-0 w-[5%]'>
                            <SideBarMain/>   {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[100%] h-[95vh] '>
                        <ContextMenu/>
                            {appState.map((val,index)=>(
                                <div id={index.toString()} key={index}  onClick={()=>isWinOnTop(val.appName)} className={`absolute ${val.onTop ? "z-50 shadow-white":"z-10 "}`}>
                                    {val.opened && appComponentMap[val.appName] && React.createElement(appComponentMap[val.appName])}
                                </div>
                            ))}
                    </div>  
                    <div className='w-[10%] '>
                             <SideAppBar/>  {/* Side Icons */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen