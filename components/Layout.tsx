import React, { useContext } from "react";
import Header from "./Header";
import { Context as ModeContext } from "../Context/ModeContext";

const Layout: React.FC = ({ children }) => {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <div id="main-wrapper">
      {mode === "normal" && <Header />}
      {children}
      {/*}
      {mode === "normal" && (
        <img
          src="/images/terminal-icon.svg"
          alt="An icon representing a terminal"
          id="terminal-icon"
          title="Wanna try terminal mode?"
          onClick={() => setMode("terminal")}
        />
      )}
      {*/}
      {mode === "normal" && (
        <div className="gif-container" title="This is me most of the time">
          <img
            src="/images/animation.gif"
            alt="A gif of me programming."
            id="gif"
          />
          {/*}
          <div className="speech-bubble">
            <p>
              This is me. My name is Mateus, I'll be going through this website
              with you.
            </p>
          </div>
      {*/}
        </div>
      )}
    </div>
  );
};

export default Layout;
