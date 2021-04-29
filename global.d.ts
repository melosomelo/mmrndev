type Tech =
  | "NextJS"
  | "Sass"
  | "Typescript"
  | "Vercel"
  | "Javascript"
  | "styled-components"
  | "React"
  | "NodeJS"
  | "Redux"
  | "Netlify"
  | "Prismic"
  | "Ethereum"
  | "Solidity";

interface TypingAnimationData {
  finalStr: string;
  currentStr: string;
  currentIndex: number;
}

interface SkillNode {
  color?: string;
  major: boolean;
  value: string;
}

interface Project {
  title: string;
  url: string;
  description: string;
  logo: string;
  techs: Tech[];
  type: "personal" | "commercial";
  screenshot?: string;
}

interface TerminalLine {
  currentDirectory: string;
  status: "ok" | "error";
  inputValue: string;
  date: Date;
}

type Directory = "~" | "about" | "portfolio" | "projects" | "contact";

interface Command {
  directive: string;
  possibleOptions: string[];
  possibleArguments: string[];
  requiredArguments: string[];
  requiredArgumentsOrder: string[];
}
