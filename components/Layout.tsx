import React, { useContext, useRef, useState } from "react";
import Header from "./Header";
import { Context as ModeContext } from "../Context/ModeContext";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  const { mode, setMode } = useContext(ModeContext);
  const sidedrawerContainerRef = useRef<HTMLDivElement>(null);
  const [showSidedrawer, setShowSidedrawer] = useState(false);

  function openSidedrawer() {
    sidedrawerContainerRef.current.classList.remove("close");
    document.querySelector("body").classList.add("no-scroll");
    setShowSidedrawer(true);
  }

  function closeSidedrawer() {
    sidedrawerContainerRef.current.classList.add("close");
    setTimeout(() => {
      setShowSidedrawer(false);
      document.querySelector("body").classList.remove("no-scroll");
    }, 500);
  }

  function onLinkClick() {
    closeSidedrawer();
  }

  return (
    <div id="main-wrapper">
      {mode === "normal" && <Header openSidedrawer={openSidedrawer} />}
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
      <div
        className={`sidedrawer-container ${showSidedrawer ? `active` : ``}`}
        ref={sidedrawerContainerRef}
      >
        <div className="sidedrawer">
          <img
            src="/images/close.svg"
            alt="Close sidedrawer"
            id="close"
            onClick={closeSidedrawer}
          />
          <img src="/images/red-logo.svg" alt="My logo" />
          <nav>
            <Link href="/">
              <a onClick={closeSidedrawer}>Home</a>
            </Link>
            <Link href="/about">
              <a onClick={closeSidedrawer}>About me</a>
            </Link>
            <Link href="/portfolio">
              <a onClick={closeSidedrawer}>Portfolio</a>
            </Link>
            <Link href="/projects">
              <a onClick={closeSidedrawer}>Other projects</a>
            </Link>
            <Link href="/contact">
              <a onClick={closeSidedrawer}>Contact</a>
            </Link>
          </nav>
        </div>
      </div>
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
