import SideAppBar from '../icons-app/sideAppBar'
import Topbar from '../topbar/Topbar'
import { disableContextMenu } from '../../custom-hooks/useDisableContextMenu'
import SideBarMain from '../sideBar/SideBarMain'
import React from 'react'
import { lazyChrome } from '../../lazyIndex'
import astro from '../../assets/astro.jpg'

export const mainScreenAppList = [
    {
        appName:'Chrome',
        opened:false,
        minimized:false,
    },
    {
        appName:'Setting',
        opened:false,
        minimized:false,
    },
    {
        appName:'Vscode',
        opened:false,
        minimized:false,
    },
    {
        appName:'Spotify',
        opened:false,
        minimized:false,
    }
]


export const appComponentMap:Record<string , React.FC> = {
    Chrome:lazyChrome
}


function MainScreen({bgImageLink}:{bgImageLink?:string}) {

    const defaultImage:string = astro
    return (
        <>
            <div className="w-full min-h-screen bg-center overflow-x-hidden bg-cover" onContextMenu={(e)=>disableContextMenu(e)} style={{backgroundImage:`url(${bgImageLink || defaultImage})`}}>
                <div className='w-full h-[5vh] bg-neutral-950 z-20'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex bg-cover justify-between' id='portal'  >  
                    <div className='min-w-0 w-[5%]'>
                            <SideBarMain/>   {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[85%] '>
                            {mainScreenAppList.map((val,index)=>(
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