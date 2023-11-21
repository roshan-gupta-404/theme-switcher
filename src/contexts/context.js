import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})
/* we can also pass default values to createContext */

export const ThemProvider = ThemeContext.Provider

// hook for exporting context in one line.
export default function useTheme(){
    return useContext(ThemeContext);
}
