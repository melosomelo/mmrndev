import { create } from "domain";
import { createContext } from "react";

const Context = createContext(null);

const GifProvider: React.FC = ({ children }) => {
  return <Context.Provider value={{ eai: "eai" }}>{children}</Context.Provider>;
};

export { Context, GifProvider };
