"use client";

import { TypewriterContext, INITIAL_TYPEWRITER_STATE } from "./contexts/typewriter-context"; 
import { useState } from "react";
import KeySoundSelect from "./components/key-sound-config"; 
import Typearea from "./components/text-area"; 

export default function App() {
  const [keySound, setKeySound] = useState(INITIAL_TYPEWRITER_STATE.keySound);
  const [content, setContent] = useState(INITIAL_TYPEWRITER_STATE.content);
  const [isTypearea, setIsTypearea] = useState(INITIAL_TYPEWRITER_STATE.isTypearea);

  return (
    <TypewriterContext.Provider
      value={{ keySound, setKeySound, content, setContent, isTypearea, setIsTypearea }}
    >
      <main className="typewriter-app-container p-12 max-md:pt-28">
        <KeySoundSelect />
        <div className="typeArea-container">
          <Typearea />
        </div>
      </main>
    </TypewriterContext.Provider>
  );
}
