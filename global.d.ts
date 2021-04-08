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
  | "Prismic";

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
