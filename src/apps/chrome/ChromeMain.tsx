import { Suspense, useRef, useState } from "react"
import AppHeader from "../AppHeader"
import Draggable from "react-draggable"

function Chrome(): React.ReactElement {
  const chromeUrl: string = "https://www.google.com/webhp?igu=1"
  const dragRef = useRef<HTMLDivElement>(null)

  const [isLoaded, setIsLoaded] = useState<boolean>(true)


  return (
    <>
        <Draggable nodeRef={dragRef as React.RefObject<HTMLElement>} offsetParent={document.body} >
          <div className="w-[50vw] h-[70vh] absolute" ref={dragRef}>
            <AppHeader appIcon="/icons/chrome.svg" appName="Chrome" />
            <div className="w-full h-full relative bg-neutral-800">

              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 z-10">
                  <span className="text-gray-600 text-sm">Loading Google...</span>
                </div>
              )}

              <iframe
                src={chromeUrl}
                className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
        </Draggable>
    </>
  )
}

export default Chrome