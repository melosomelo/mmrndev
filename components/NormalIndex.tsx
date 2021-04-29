import { useEffect, useState } from "react";
import sleep from "../utils/sleep";
import Link from "next/link";

export default function Home() {
  const [im, setIm] = useState<TypingAnimationData>({
    currentIndex: 0,
    currentStr: "",
    finalStr: "I'm",
  });
  const [matt, setMatt] = useState<TypingAnimationData>({
    currentIndex: 0,
    currentStr: "",
    finalStr: "Matt.",
  });
  const [aWeb, setAWeb] = useState<TypingAnimationData>({
    currentIndex: 0,
    currentStr: "",
    finalStr: "A web",
  });

  const [developer, setDeveloper] = useState<TypingAnimationData>({
    currentIndex: 0,
    currentStr: "",
    finalStr: "developer,",
  });

  const [designer, setDesigner] = useState<TypingAnimationData>({
    currentIndex: 0,
    currentStr: "",
    finalStr: "designer.",
  });

  useEffect(() => {
    (async () => {
      for (let i = 0; i < 3; i++) {
        setIm((prevState) => ({
          ...prevState,
          currentStr:
            prevState.currentStr + prevState.finalStr[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1,
        }));
        await sleep(100);
      }
      for (let i = 0; i < 5; i++) {
        setMatt((prevState) => ({
          ...prevState,
          currentStr:
            prevState.currentStr + prevState.finalStr[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1,
        }));
        await sleep(100);
      }
      await sleep(500);
      for (let i = 0; i < 5; i++) {
        setAWeb((prevState) => ({
          ...prevState,
          currentStr:
            prevState.currentStr + prevState.finalStr[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1,
        }));
        await sleep(100);
      }
      for (let i = 0; i < 10; i++) {
        setDeveloper((prevState) => ({
          ...prevState,
          currentStr:
            prevState.currentStr + prevState.finalStr[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1,
        }));
        await sleep(100);
      }
      await sleep(500);
      for (let i = 0; i < 9; i++) {
        setDesigner((prevState) => ({
          ...prevState,
          currentStr:
            prevState.currentStr + prevState.finalStr[prevState.currentIndex],
          currentIndex: prevState.currentIndex + 1,
        }));
        await sleep(100);
      }
    })();
  }, []);

  return (
    <main className="index">
      <div className="introduction">
        <h1 id="first-sentence">
          {im.currentStr} <span>{matt.currentStr}</span>
        </h1>
        <h1 id="second-sentence">
          {aWeb.currentStr} <span>{developer.currentStr}</span>
        </h1>
        <h1 id="designer">
          <span>{designer.currentStr}</span>
        </h1>

        <p>I create elegant and creative solutions for your problems.</p>
        <Link href="/contact">
          <button>Let's chat</button>
        </Link>
      </div>
      <img src="images/red-logo.svg" alt="My logo but in red." />
    </main>
  );
}
