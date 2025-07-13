import { useChangeWallpaper } from "../../store/openAppStore"

const availableWallpapers = [
    {
        name: "Jotaro",
        link: "assets/jotaro.jpg"
    },
    {
        name: "Astro",
        link: "assets/astro.jpg"
    },
    {
        name: "Kite",
        link: "assets/kite.jpg"
    },
]

function ChangeWallpaper() {
    const currentWallpaper = useChangeWallpaper((state) => state.bgImageLink)
    const setWallpaper = useChangeWallpaper((state) => state.changeWallpaper)

    return (
        <div className="w-full h-full p-4 space-y-6">
            <div className="w-full h-[30vh] flex items-center justify-center">
                <div
                    className="w-[90%] sm:w-[70%] md:w-[50%] h-full rounded-xl shadow-md hover:opacity-80 cursor-pointer bg-center bg-cover bg-no-repeat transition-all duration-300"
                    style={{ backgroundImage: `url(${currentWallpaper})` }}
                />
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {availableWallpapers.map((val, index) => (
                    <div
                        key={index}
                        className="w-full aspect-video rounded-xl bg-center bg-no-repeat bg-cover hover:opacity-80 cursor-pointer transition-all duration-300 shadow-sm"
                        style={{ backgroundImage: `url(${val.link})` }}
                        onClick={() => setWallpaper(val.link)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChangeWallpaper
