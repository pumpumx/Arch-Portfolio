import { lazy } from "react";

export const lazyMainScreen = lazy(()=>import('/home/pumpum/coding/arch-portfolio/src/components/mainScreen/MainScreen.tsx'))
export const lazyChrome = lazy(()=>import('/home/pumpum/coding/arch-portfolio/src/apps/chrome/ChromeMain.tsx'))