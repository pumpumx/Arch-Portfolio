interface iconsReuse{
    iconImage: string,
    name: string,
    id: number,
    refLink:string | undefined
}




function IconReuse({iconImage,name,id,refLink }:iconsReuse): React.ReactNode {
    const LinkHandler = (refLink:(string | undefined))=>{

        if(!refLink){
            console.log("No ref link") //If reflink is not provided it means we need to open the main App
            return;
        }

        if(refLink.length > 0){
        window.open(refLink , '_blank')
        console.log("RefLink" ,refLink)
        }
        
    }
    return (
        <>
            <div key={id} className="flex items-center flex-col w-[100px] mt-5 p-1  hover:bg-white/60 ease-out  transition-all" onDoubleClick={()=>LinkHandler(refLink)}>
                <div className='w-[40px] h-[40px] bg-contain ' style={{ backgroundImage: `url(${iconImage})` }}>
                </div>
                <div className='font-light text-white cursor-default'>{name}</div>
            </div>
        </>
    )
}

export default IconReuse