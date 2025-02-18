"use client";

import { useContext, useEffect, useRef } from "react";
import { TKeySound, TypewriterContext } from "../contexts/typewriter-context";
import { motion } from 'framer-motion';

const KeySoundPath: Record<TKeySound, string> = {
  heavy: "/sounds/key-hard.wav",
  subtle: "/sounds/key-subtle.wav",
};

export default function Typearea() {
  const { keySound, content, setContent, isTypearea } = useContext(TypewriterContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const playTypeSound = () => {
    const audio = new Audio(KeySoundPath[keySound]);
    audio.volume = 0.3;
    audio.play();
  };

  const autoResize = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      setContent(textarea.value);
    }
  };

  useEffect(() => {
    autoResize();
  }, []);

  return (
    <div className="typeArea-textarea-wrapper">
      {isTypearea && (
        <motion.textarea
          ref={textareaRef}
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          className="outline-none focus:outline-none text-lg font-medium bg-transparent w-full h-full resize-none"
          placeholder="Start typing your thoughts..."
          autoFocus
          onChange={autoResize}
          onKeyDown={playTypeSound}
          value={content}
        />
      )}
    </div>
  );
}
