import { useContext, createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    lightMode: () => {},
    darkMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

//costom hook
export default function useTheme(){
    return useContext(ThemeContext)
}

