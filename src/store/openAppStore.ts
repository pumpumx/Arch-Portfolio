import { create } from "zustand";

type openApp = {
    AppName: { appName: string, opened: boolean, minimized: boolean, onTop: boolean }[],
    toggleApp: (name: string, key: string, value: boolean) => void;
    bringAppWindowOnTop: (name: string) => void;
    isMinimized: (name: string) => boolean;
}

export const useOpenApp = create<openApp>((set, get) => ({
    AppName: [
        {
            appName: 'Chrome',
            opened: false,
            minimized: true,
            onTop: false,
        },
        {
            appName: 'About-me',
            opened: true,
            minimized: true,
            onTop: false,

        },
        {
            appName: 'Setting',
            opened: false,
            minimized: true,
            onTop: false,
        },
        {
            appName: 'Konsole',
            opened: false,
            minimized: true,
            onTop: false,
        },
        {
            appName: 'Spotify',
            opened: false,
            minimized: true,
            onTop: false,
        }
    ],
    toggleApp: (name, key, value) => {
        set((state) => ({
            AppName: state.AppName.map((app) => app.appName === name ? { ...app, [key]: value } : app)
        }))
    },
    bringAppWindowOnTop: (name) => {
        set((state) => ({
            AppName: state.AppName.map((app) => app.appName === name ? { ...app, ['onTop']: true } : { ...app, ['onTop']: false })
        }))
    },
  isMinimized: (name: string): boolean => {
    let newMinimizedValue = false;
    set((state) => {
        const updatedApps = state.AppName.map((app) => {
            if (app.appName === name) {
                newMinimizedValue = !app.minimized;
                return { ...app, minimized: newMinimizedValue };
            }
            return app;
        });

        return { AppName: updatedApps };
    });

    return newMinimizedValue;
}


}))

type changeWallpaper = {
    bgImageLink: string,
    changeWallpaper: (newWallpaper: string) => void;
}

export const useChangeWallpaper = create<changeWallpaper>((set) => ({
    bgImageLink: 'assets/kite.jpg',
    changeWallpaper: (newWallpaper: string) => {
        set({ bgImageLink: newWallpaper });
    }
}))
