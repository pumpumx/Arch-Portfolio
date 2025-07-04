import {create} from 'zustand'


type aboutMe = {
    pageName:string,
    changePageName: (newPageName:string)=>void
}


const usePageNavigator = create<aboutMe>((set)=>({
    pageName:'About Me',
    changePageName:(newPageName:string)=>{
        set({pageName:newPageName});
    }
}))


export default usePageNavigator