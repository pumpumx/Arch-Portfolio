




const settingOptions = [
    {
        name: "Change Wallpaper",
        link: "icons/chrome.svg",
        state1: 'opened'
    },
]




function SettingSideBar() {

    

    return (
        <div className='w-full z-20 h-full flex flex-col relative items-center justify-start pt-5 bg-black/50 shadow-lg ring-1 ring-black/5 '>
            <div className="w-[90%]  h-[4vh]">
                <span className="w-full h-full flex items-center justify-center px-1 gap-2   bg-neutral-800 rounded-md ">
                    <div className="w-[20px] h-[40px] bg-contain bg-no-repeat bg-center" style={{backgroundImage:`url('icons/search.png')`}}>
                    </div>
                        <input type="text" className="w-full h-full font-bold bg-neutral-800 outline-none text-sm text-white caret-white" />
                </span>
            </div>
            <div className="w-full h-full p-2">
                <div className="w-full flex-row flex items-center justify-between mb-1 flex-nowrap ">
                    <span className="w-[50%] text-nowrap "><p className="text-neutral-600 text-[5px] text-wrap sm:text-xs font-bold">Main Settings</p></span>
                    <div className="w-[50%]  h-[2px] bg-neutral-500">
                    </div>
                </div>
                {settingOptions.map((val, index) => (
                    <div key={index} id={index.toString()} className="w-full roboto-slab-new cursor-pointer h-[2rem] font-bold p-1 text-white rounded-lg hover:bg-white/40 flex items-center justify-center">
                        <span className="w-full  text-[10px]  sm:text-xs"><p>{val.name}</p></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SettingSideBar