import Draggable from 'react-draggable'
import AppHeader from '../AppHeader'
import React, { useRef } from 'react'
import Navigation from './Navigation.tsx'
import AboutMePage from './AboutMePage.tsx'
import SkillsPage from './Skills.tsx'
import usePageNavigator from '../../store/aboutMeStore.ts'


const aboutMeComponentMap:Record<string , React.FC> = { 
  'Skillset':SkillsPage,
  'About Me':AboutMePage,
}


function AboutMeMain() {

    const aboutRef = useRef<HTMLDivElement>(null)
    const tabOpened = usePageNavigator((state)=>state.pageName) 
  return (
   <Draggable nodeRef={aboutRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
          <div className="w-[50vw] h-[70vh] absolute rounded-md shadow-[0px_0px_50px_1px_black]" ref={aboutRef}>
            <AppHeader appIcon="/icons/folder.svg" appName="About-me" />
            <div className="w-full h-full relative bg-neutral-800 flex ">
                <div className={`navigation  h-full  z-50 md:min-w-[25%] absolute text-white/90 w-0`}>
                  <Navigation/>
                </div>
                <div className={`md:min-w-[75%] nax-w-[100%] w-full h-full rounded-md bg-gradient-to-br from-gray-900 via-gray-800 to-black `}>
                  {aboutMeComponentMap[tabOpened] && React.createElement(aboutMeComponentMap[tabOpened])}
                </div>
            </div>
          </div>
        </Draggable>
  )
}

export default AboutMeMain