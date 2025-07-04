import SideAppBar from '../icons-app/sideAppBar'
import Topbar from '../topbar/Topbar'
import { disableContextMenu } from '../../custom-hooks/useDisableContextMenu'
import SideBarMain from '../sideBar/SideBarMain'
import React from 'react'
import Chrome from '../../apps/chrome/ChromeMain'
import { useChangeWallpaper, useOpenApp } from '../../store/openAppStore'
import AboutMeMain from '../../apps/about-me/AboutMeMain'

const appComponentMap:Record<string , React.FC> = {
    Chrome:Chrome,
    'About-me':AboutMeMain
}


function MainScreen() {

    const appState = useOpenApp((state)=>state.AppName)
    const bgImageLink = useChangeWallpaper((state)=>state.bgImageLink)

    return (
        <>
            <div className="w-full min-h-screen bg-center overflow-x-hidden bg-cover" onContextMenu={(e)=>disableContextMenu(e)} style={{backgroundImage:`url(${bgImageLink})`}}>
                <div className='w-full h-[5vh] bg-neutral-950 z-20'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex bg-cover justify-between' id='portal'  >  
                    <div className='min-w-0 w-[5%]'>
                            <SideBarMain/>   {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[85%] '>
                            {appState.map((val,index)=>(
                                <div id={index.toString()} key={index}>
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