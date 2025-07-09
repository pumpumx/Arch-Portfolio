import { create } from "zustand";


type settingsType = { 
    pageName : string,
    changeSettingPage:(pageName:string) =>void
}


export const useSettingStore = create<settingsType>((set)=>({
    pageName:'Change Wallpaper',
    changeSettingPage:(newPageName:string) => {
        set({pageName: newPageName})
    },
}))

