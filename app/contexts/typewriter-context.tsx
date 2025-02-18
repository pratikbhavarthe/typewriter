"use client";

import { createContext } from "react";

const WELCOME_CONTENT = `-----------------------------------------------
A fun typewriter project
Used Next.js, TypeScript & Tailwind - v0.1
-----------------------------------------------

I built this as a fun project. I will be adding
more subtle features and improvements.

Turn on your volume while typing :)

Cheers,
Pratik`;

export type TKeySound = "subtle" | "heavy";

export interface ITypewriterContext {
  keySound: TKeySound;
  setKeySound: (keySound: TKeySound) => void;
  content: string;
  setContent: (content: string) => void;
  isTypearea: boolean;
  setIsTypearea: (state: boolean) => void;
}

export const INITIAL_TYPEWRITER_STATE: ITypewriterContext = {
  keySound: "subtle",
  setKeySound: null!, 
  content: WELCOME_CONTENT,
  setContent: null!,
  isTypearea: true,
  setIsTypearea: null!,
};

export const TypewriterContext = createContext<ITypewriterContext>(
  INITIAL_TYPEWRITER_STATE
);
