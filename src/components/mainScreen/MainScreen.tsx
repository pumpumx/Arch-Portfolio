import SideAppBar from '../icons-app/sideAppBar'
import Topbar from '../topbar/Topbar'
import { disableContextMenu } from '../../custom-hooks/useDisableContextMenu'
import SideBarMain from '../sideBar/SideBarMain'

function MainScreen(bgImageLink?:string) {
    return (
        <>
            <div className="w-full min-h-screen bg-center overflow-x-hidden bg-cover" onContextMenu={(e)=>disableContextMenu(e)} style={{backgroundImage:`url(src/assets/astro.jpg)`}}>
                <div className='w-full h-[5vh] bg-neutral-950 z-20'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex bg-cover justify-between' id='portal'  >  
                    <div className='min-w-0 w-[5%]'>
                            <SideBarMain/>   {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[85%] '>
                              {/* Main Screen */}
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