'use client';
import { useContext, createContext, Dispatch, SetStateAction, useState, useRef, RefObject, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { shouldPlayIntro, markIntroPlayed } from '@/lib/utils';

type GlobalAppStatesType = {
    colors: string[];    
    playIntro?: boolean;
    introDuration?: number;
    showMenu?: boolean;
}
const GlobalAppStatesContext = createContext<GlobalAppStatesType | undefined>(undefined);

type GlobalAppFuncsType = {
    setColors: Dispatch<SetStateAction<string[]>>;    
    setPlayIntro?: Dispatch<SetStateAction<boolean>>; 
    setShowMenu?: Dispatch<SetStateAction<boolean>>;
}
const GlobalAppFuncsContext = createContext<GlobalAppFuncsType | undefined>(undefined);


export const useGlobalAppStates = () => {
  const ctx = useContext(GlobalAppStatesContext);
  if (!ctx) throw new Error('useGlobalAppStates must be used within <GlobalAppProvider />');
  return ctx;
};

export const useGlobalAppFuncs = () => {
  const ctx = useContext(GlobalAppFuncsContext);
  if (!ctx) throw new Error('useGlobalAppFuncs must be used within <GlobalAppProvider />');
  return ctx;
};

type GlobalAppProviderProps = {
    children: React.ReactNode;
}
function GlobalAppProvider({ children }: GlobalAppProviderProps) {
    const [colors, setColors] = useState<string[]>(["#1ce0d4", "#5f01d1", "#39106a", "#fff", "#000"]);
    const [playIntro, setPlayIntro] = useState<boolean>(false);
    const PLAYINTRO_DURATION = 5000; // milliseconds

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const pathname = usePathname();
    const runningRef = useRef(false);

    const maybePlay = async () => {
      if (runningRef.current) return;
      if (!shouldPlayIntro()) return;

      runningRef.current = true;
      try {
        setPlayIntro(true);
        markIntroPlayed();
      } finally {
        runningRef.current = false;
      }
    };

    // ✅ Runs on page transitions (route changes)
    useEffect(() => {
      maybePlay();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);



    // on mount
    useEffect(() => {
        if( !playIntro ) return;
        setTimeout(() => {
            setPlayIntro(false);
        }, PLAYINTRO_DURATION);
    }, [playIntro]);

    useEffect(() => {
        // lock scroll when menu is open
        if ( showMenu ) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showMenu]);

  return (
    <GlobalAppStatesContext.Provider value={{ colors, playIntro, introDuration: PLAYINTRO_DURATION, showMenu }}>
      <GlobalAppFuncsContext.Provider value={{ setColors, setShowMenu }}>
        { children }
      </GlobalAppFuncsContext.Provider>
    </GlobalAppStatesContext.Provider>
  )
}

export default GlobalAppProvider;