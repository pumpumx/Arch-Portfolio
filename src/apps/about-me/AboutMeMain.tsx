import Draggable from 'react-draggable'
import AppHeader from '../AppHeader'
import React, { useRef } from 'react'
import Navigation from './Navigation.tsx'
import AboutMePage from './AboutMePage.tsx'
import SkillsPage from './Skills.tsx'
import usePageNavigator from '../../store/aboutMeStore.ts'
import ProjectShowcase from './Project.tsx'
import EducationSection from './Education.tsx'
import { useOpenApp } from '../../store/openAppStore.ts'
const aboutMeComponentMap:Record<string , React.FC> = { 
  'Skillset':SkillsPage,
  'About Me':AboutMePage,
  'Projects':ProjectShowcase,
  'Education':EducationSection,
}


function AboutMeMain() {
     const getMinimized = useOpenApp.getState().AppName[1].minimized
    const aboutRef = useRef<HTMLDivElement>(null)
    const tabOpened = usePageNavigator((state)=>state.pageName) 
  return (
   <Draggable nodeRef={aboutRef as React.RefObject<HTMLElement>}  offsetParent={document.body}>
          <div className={` ${getMinimized?"w-[50vw] h-[70vh]":"w-[95vw] h-[100vh]"} transition-all ease-out  absolute rounded-md shadow-[0px_0px_50px_1px_black]`} ref={aboutRef}>
            <AppHeader appIcon="/icons/folder.svg" appName="About-me" />
            <div className="w-full h-full relative bg-neutral-800 flex ">
                <div className={`navigation  h-full  z-50 md:min-w-[25%] absolute text-white/90 w-0`}>
                  <Navigation/>
                </div>
                <div className={`md:min-w-[75%] max-w-[100%] w-full h-full rounded-md bg-gradient-to-br from-gray-900 via-gray-800 to-black `}>
                  {aboutMeComponentMap[tabOpened] && React.createElement(aboutMeComponentMap[tabOpened])}
                </div>
            </div>
          </div>
        </Draggable>
  )
}

export default AboutMeMain