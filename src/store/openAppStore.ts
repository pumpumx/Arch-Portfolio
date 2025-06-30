import { create} from "zustand";

type openApp = {
    AppName:string,
    opened:boolean,
    minimized:boolean,
}

export const useOpenApp = create<openApp>(()=>({
    AppName:"",
    opened:false,
    minimized:false,
})) 

