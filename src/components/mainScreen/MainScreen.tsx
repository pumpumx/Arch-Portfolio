import SideAppBar from '../icons-app/sideAppBar'
import Topbar from '../topbar/Topbar'
import { disableContextMenu } from '../../custom-hooks/useDisableContextMenu'
import Chrome from '../../apps/chrome/ChromeMain'



function MainScreen(bgImageLink?:string) {
    return (
        <>
            <div className="w-full min-h-screen bg-center overflow-x-hidden " onContextMenu={(e)=>disableContextMenu(e)} >
                <div className='w-full h-[5vh] bg-neutral-950'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex bg-cover justify-center overflow-x-hidden overflow-y-hidden '  >  {/* style={{backgroundImage:`url(${astroImg})`}} */}
                    <div className='min-w-0 w-[5%] '>
                                {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[85%] '>
                            <Chrome/>  {/* Main Screen */}
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