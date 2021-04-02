import React, { useContext, createContext, useState } from "react";

type Mode = "normal" | "terminal";
interface ModeContext {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

const Context = createContext<ModeContext>(null);

const ModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<Mode>("normal");
  return (
    <Context.Provider value={{ mode, setMode }}>{children}</Context.Provider>
  );
};

export { Context, ModeProvider };
