import Draggable from 'react-draggable'
import AppHeader from '../AppHeader'
import { useRef } from 'react'
import Navigation from './Navigation.tsx'
import AboutMePage from './AboutMePage.tsx'

function AboutMeMain() {

    const aboutRef = useRef<HTMLDivElement>(null)
  return (
   <Draggable nodeRef={aboutRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
          <div className="w-[50vw] h-[70vh] absolute" ref={aboutRef}>
            <AppHeader appIcon="/icons/folder.svg" appName="About-me" />
            <div className="w-full h-full relative bg-neutral-800 flex ">
                <div className={`navigation  h-full  opacity-50 md:min-w-[25%] absolute  w-0`}>
                  <Navigation/>
                </div>
                <div className={`md:min-w-[75%] nax-w-[100%] w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black `}>
                  <AboutMePage/>
                </div>
            </div>
          </div>
        </Draggable>
  )
}

export default AboutMeMain