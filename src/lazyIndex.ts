import { lazy } from "react";

export const lazyMainScreen = lazy(()=>import('./components/mainScreen/MainScreen.tsx'))
export const lazyChrome = lazy(()=>import('./apps/chrome/ChromeMain.tsx')) 