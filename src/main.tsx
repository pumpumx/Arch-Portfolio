import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import LoadingScreen from './components/loadingScreen/LoadingScreen.tsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<LoadingScreen/>}>
      
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
