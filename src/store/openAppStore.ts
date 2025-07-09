import { create } from "zustand";

type openApp = {
    AppName: { appName: string, opened: boolean, minimized: boolean, onTop: boolean }[],
    toggleApp: (name: string, key: string, value: boolean) => void;
    bringAppWindowOnTop: (name: string) => void;
}

export const useOpenApp = create<openApp>((set) => ({
    AppName: [
        {
            appName: 'Chrome',
            opened: false,
            minimized: false,
            onTop: false,
        },
        {
            appName: 'About-me',
            opened: false,
            minimized: false,
            onTop: false,

        },
        {
            appName: 'Setting',
            opened: false,
            minimized: false,
            onTop: false,
        },
        {
            appName: 'Konsole',
            opened: false,
            minimized: false,
            onTop: false,
        },
        {
            appName: 'Spotify',
            opened: false,
            minimized: false,
            onTop: false,
        }
    ],
    toggleApp: (name, key, value) => {
        set((state) => ({
            AppName: state.AppName.map((app) => app.appName === name ? { ...app, [key]: value } : app)
        }))
    },
    bringAppWindowOnTop: (name) => {
        set((state)=>({
            AppName: state.AppName.map((app)=>app.appName === name ? {...app  , ['onTop']:true}  : {...app , ['onTop']:false})
        }))
    }

}))



type changeWallpaper = {
    bgImageLink: string,
    changeWallpaper: (newWallpaper: string) => void;
}

export const useChangeWallpaper = create<changeWallpaper>((set) => ({
    bgImageLink: 'assets/jotaro.jpg',
    changeWallpaper: (newWallpaper: string) => {
        set({ bgImageLink: newWallpaper });
    }
}))
