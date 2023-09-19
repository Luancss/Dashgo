import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { ReactNode, createContext, useContext } from "react";

interface SidearDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children} : SidearDrawerProviderProps) {
  const disclosure = useDisclosure()

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
  }

  export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
