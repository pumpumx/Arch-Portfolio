import { useOpenApp } from "../store/openAppStore"



type iconType = {
    iconLink: string,
    iconName: string
}
const headerIcons = [
    {
        iconLink: "/headerIcons/maximize.ico",
        iconName: "maximize"
    },
    {
        iconLink: "/headerIcons/close.ico",
        iconName: "close"
    },

]

interface appHeader {
    appIcon: string,
    appName: string
}


function AppHeader({ appIcon, appName }: appHeader): React.ReactElement {

    //App header logic
    const toggleCloseApp = useOpenApp((state) => state.toggleApp)
    const toggleMaximize = useOpenApp((state) => state.isMinimized)

    const toggleAppHandler = (val: iconType) => {
        if (val.iconName === 'close') {
            toggleCloseApp(appName, 'opened', false)
        }
        if (val.iconName === 'maximize') {
            toggleMaximize(appName)

        }
    }

    return (
        <div className="w-full h-[3vh] bg-neutral-900 flex items-center justify-between p-2 rounded-t-lg">
            <div className="w-[20%] h-full flex justify-start items-center ">
                <span className="w-[20px] h-[20px] bg-cover bg-center" style={{ backgroundImage: `url(${appIcon})` }}></span>
            </div>
            <div className="flex items-center justify-center w-[10%] h-full font-bold text-sm text-white">
                <span className="text-nowrap">{appName}</span>
            </div>
            <div className="w-[20%] h-full flex items-center justify-end gap-2">
                {headerIcons.map((val, index: number) => (
                    <span key={index} onClick={() => toggleAppHandler(val)} className="w-[10px] h-[10px] hover:cursor-pointer bg-contain bg-center hover:scale-120 ease-in transition-all" id={index.toString()} style={{ backgroundImage: `url(${val.iconLink})` }}>
                    </span>
                ))}
            </div>
        </div>
    )
}


export default AppHeader


