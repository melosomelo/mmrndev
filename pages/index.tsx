import { useContext } from "react";
import { Context as ModeContext } from "../Context/ModeContext";
import NormalIndex from "../components/NormalIndex";
import Terminal from "../components/Terminal/index";

export default function Home() {
  const { mode } = useContext(ModeContext);

  if (mode === "normal") {
    return <NormalIndex />;
  }

  return <Terminal />;

  return <h1>eai</h1>;
}
