interface iconsReuse{
    iconImage: string,
    name: string,
    id: string
}
function IconReuse({iconImage,name,id }:iconsReuse): React.ReactNode {

    return (
        <>
            <div id={id} className="flex items-center flex-col w-[100px] mt-5 p-1  hover:bg-white/60 ease-out  transition-all">
                <div className='w-[50px] h-[50px] bg-contain ' style={{ backgroundImage: `url(${iconImage})` }}>
                </div>
                <div className='font-light text-white cursor-default    '>{name}</div>
            </div>
        </>
    )
}

export default IconReuse