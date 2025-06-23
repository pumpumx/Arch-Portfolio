
import clsx from 'clsx'
import { useGetDate } from '../../custom-hooks/useGetDate'
import { useEffect, useState } from 'react'
import { trayIcons } from './barConstants'


function Topbar() {
    

    const [count, setCount] = useState<string | null>()

    setInterval(() => {
        const date:string = useGetDate()
        setCount(date)
    }, 1000)

    useEffect(() => {
    }, [])

    return (
        <>
            <div className={clsx(
                "w-full h-full  flex items-center justify-between cursor-default"
            )}>
                <div className={clsx(
                    "w-[30%] h-full barlow-light text-white flex items-center ml-3 "
                )}>
                    <span><p>Activites</p></span>
                </div>
                <div className={clsx(
                    "w-[40%] h-full  text-white font-bold  flex items-center justify-center",
                    "text-lg barlow-light" 
                )}>
                    {count}
                </div>
                <div className={clsx(
                    "w-[30%] h-full flex items-center justify-end gap-3 mr-8"
                )}>
                    {trayIcons.map((val , index)=>(
                        <div className='w-[16px] bg-contain h-full bg-no-repeat bg-center' id={index.toString()} style={{backgroundImage:`url(${val.iconLink})`}}>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Topbar
