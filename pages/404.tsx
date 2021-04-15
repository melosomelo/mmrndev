import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");

    return () => document.querySelector("body").classList.remove("no-scroll");
  }, []);
  return (
    <main className="not-found">
      <div>
        <h1>404</h1>
        <p>Are you sure about that?</p>
      </div>
      <img src="/images/sure.gif" id="sure" alt="Are you sure about that gif" />
    </main>
  );
}
