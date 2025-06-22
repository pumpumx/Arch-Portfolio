import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import LoadingScreen from './components/loadingScreen/LoadingScreen.tsx'
import { lazyMainScreen } from './lazyIndex.ts'
import { withSuspense } from './custom-hooks/WithSuspense.tsx'


const MainScreenWithSuspense = withSuspense(lazyMainScreen, <LoadingScreen />);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<MainScreenWithSuspense/>}>
    </Route>  
    </>

  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </StrictMode>,
)
