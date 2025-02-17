import { ReactNode, useMemo, useState } from "react";
import { 
  INITIAL_TYPEWRITER_STATE, 
  TKeySound, 
  TypewriterContext 
} from "../contexts/typewriter-context";

interface TypewriterProviderProps {
  children: ReactNode;
}

export default function TypewriterContextProvider({ children }: TypewriterProviderProps) {
  const [keySound, setKeySound] = useState<TKeySound>(INITIAL_TYPEWRITER_STATE.keySound);
  const [content, setContent] = useState(INITIAL_TYPEWRITER_STATE.content);
  const [isTypearea, setIsTypearea] = useState(INITIAL_TYPEWRITER_STATE.isTypearea);

  const contextValue = useMemo(() => ({
    keySound,
    setKeySound,
    content,
    setContent,
    isTypearea,
    setIsTypearea,
  }), [keySound, content, isTypearea]);

  return (
    <TypewriterContext.Provider value={contextValue}>
      {children}
    </TypewriterContext.Provider>
  );
}
