import React, { useMemo, Dispatch, SetStateAction } from "react";

interface Props extends TerminalLine {
  active?: boolean;
  isTyping?: boolean;
}

const TerminalLine: React.FC<Props> = ({
  currentDirectory,
  inputValue,
  isTyping,
  active,
  status,
  date,
}) => {
  return (
    <div className="line main">
      <div className="current-directory">{currentDirectory}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="value">{inputValue}</div>
        {active && <div className={`cursor ${!isTyping ? "blink" : ""}`} />}
      </form>
      <div className="status-bar">
        <div className={`status ${status || `ok`}`}>
          <img
            src={`${
              status === "ok" || !status
                ? `/images/check.svg`
                : `/images/error.svg`
            }`}
          />
        </div>
        <div className="time">{`${
          date.getHours() < 10 ? "0" : ""
        }${date.getHours()}:${
          date.getMinutes() < 10 ? "0" : ""
        }${date.getMinutes()}:${
          date.getSeconds() < 10 ? "0" : ""
        }${date.getSeconds()}`}</div>
      </div>
    </div>
  );
};

export default TerminalLine;
