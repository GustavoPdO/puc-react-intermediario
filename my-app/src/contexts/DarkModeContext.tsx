import { ReactNode, createContext, useContext, useState } from "react";

import { ColorModes } from "../Types";

interface DarkModeContextProps {
  colorMode: ColorModes;
  toggleMode: () => void
}

export const DarkModeContext = createContext({} as DarkModeContextProps)

interface DarkModeContextProviderProps {
  children: ReactNode
}

export function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
  const [colorMode, setColorMode] = useState<ColorModes>("light")

  function toggleMode() {
    setColorMode(prevState => prevState === "light" ? "dark" : "light")
  }

  return <DarkModeContext.Provider value={{ colorMode, toggleMode }}>{children}</DarkModeContext.Provider>
}

export const useDarkMode = () => {
  return useContext(DarkModeContext)
}