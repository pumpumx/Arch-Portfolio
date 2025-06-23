import AppIcon from '../icons-app/AppIcon'
import Topbar from '../topbar/Topbar'
import { disableContextMenu } from '../../custom-hooks/useDisableContextMenu'
function MainScreen(bgImageLink?:string) {
    return (
        <>
            <div className="w-full min-h-screen bg-center" onContextMenu={(e)=>disableContextMenu(e)} >
                <div className='w-full h-[5vh] bg-neutral-950'>   {/* Top bar */}
                    <Topbar/>
                </div>
                <div className='w-full min-h-[95vh] flex bg-cover justify-center'  >  {/* style={{backgroundImage:`url(${astroImg})`}} */}
                    <div className='min-w-0 w-[5%] '>
                                {/* Side Bar */}
                    </div>
                    <div className='min-w-[70%] w-[85%] '>
                                {/* Main Screen */}
                    </div>  
                    <div className='w-[10%] '>
                             <AppIcon/>  {/* Side Icons */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen