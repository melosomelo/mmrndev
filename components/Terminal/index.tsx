import { useState, useRef, useEffect, ChangeEvent, useMemo } from "react";
import TerminalLine from "./TerminalLine/index";

const Terminal: React.FC = () => {
  const [currentDirectory, setCurrentDirectory] = useState("~");
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"ok" | "error">("ok");
  const [isTyping, setIsTyping] = useState(false);
  const [terminalLines, setTerminalLines] = useState<(TerminalLine | string)[]>(
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);
  let timerRef = useRef(null);

  const date = useMemo(() => {
    return new Date();
  }, [terminalLines]);

  useEffect(() => {
    inputRef.current.focus();

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    if (document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    setInputValue(e.target.value);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 300);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    parse(inputValue);
    const dateCopy = Object.assign(date);
    setTerminalLines((prevState) => [
      ...prevState,
      { currentDirectory, inputValue, status, date: dateCopy },
    ]);

    setInputValue("");
  };

  const parse = (str: string) => {
    const searchForCommand = (c: string) => {};

    const tokens = str.trim().split(" ");
    if (tokens.length === 0) {
      return;
    }

    const command = tokens[0];
  };

  return (
    <main className="terminal">
      {terminalLines.map((tl, index) => {
        if (typeof tl !== "string") {
          return (
            <TerminalLine
              currentDirectory={tl.currentDirectory}
              inputValue={tl.inputValue}
              status={tl.status}
              date={tl.date}
              active={false}
              key={`${tl.currentDirectory}-${index}`}
            />
          );
        }
      })}
      <TerminalLine
        currentDirectory={currentDirectory}
        inputValue={inputValue}
        status={status}
        active
        isTyping={isTyping}
        date={date}
      />
      <form onSubmit={onFormSubmit}>
        <input
          value={inputValue}
          onChange={onValueChange}
          spellCheck="false"
          ref={inputRef}
          id="terminal-input"
          autoComplete="off"
        />
      </form>
    </main>
  );
};

export default Terminal;
