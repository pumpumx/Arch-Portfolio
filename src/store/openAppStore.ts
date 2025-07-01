    import { create } from "zustand";
    import astro from '../assets/astro.jpg'

    type openApp = {
        AppName: { appName: string, opened: boolean, minimized: boolean }[],
        toggleApp: (name:string , key:string , value:boolean)=> void;
    }

    export const useOpenApp = create<openApp>((set) => ({
        AppName: [
            {
                appName: 'Chrome',
                opened: false,
                minimized: false,
            },
            {
                appName: 'Setting',
                opened: false,
                minimized: false,
            },
            {
                appName: 'Vscode',
                opened: false,
                minimized: false,
            },
            {
                appName: 'Spotify',
                opened: false,
                minimized: false,
            }
        ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        toggleApp:(name,key,value)=>{
            set((state)=>({
                AppName: state.AppName.map((app)=>app.appName===name ? {...app , [key]:value} :app )
            }))
        },
        
    }))



    type changeWallpaper = {
        bgImageLink: string,
        changeWallpaper: (newWallpaper: string) => void;
    }

    export const useChangeWallpaper = create<changeWallpaper>((set) => ({
        bgImageLink: astro,
        changeWallpaper: (newWallpaper: string) => {
            set({ bgImageLink: newWallpaper });
        }
    }))
