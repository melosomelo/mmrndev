import { useEffect, useMemo } from "react";
import SkillChain from "../components/SkillChain";
import Experience from "../components/Experience";

const About: React.FC = () => {
  const reactChain = useMemo<SkillNode[]>(
    () => [
      { value: "Classes", major: false },
      { value: "Hooks", major: false },
      { value: "Redux", major: false, color: "#764abc" },
      { value: "Routing", major: false },
      { value: "Next", major: false, color: "black" },
    ],
    []
  );
  const nodeChain = useMemo<SkillNode[]>(
    () => [
      { value: "NodeJS", major: false },
      { value: "Express", major: false },
      { value: "Postgres", major: false, color: "#336791" },
      { value: "MySQL", major: false, color: "#f29111" },
      { value: "Sequelize", major: false },
    ],
    []
  );
  const dockerChain = useMemo<SkillNode[]>(
    () => [
      { value: "Containers", major: false },
      { value: "Images", major: false },
      { value: "Volumes", major: false },
      { value: "Networks", major: false },
    ],
    []
  );

  useEffect(() => {
    const experience = document.querySelector("section.experience");
    const intro = document.querySelector("section.intro");
    const skills = document.querySelector("section.skills");

    const observer = new IntersectionObserver(
      (entries, obsv) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(experience);
    observer.observe(intro);
    observer.observe(skills);
  }, []);

  return (
    <main className="about">
      <h1>about me</h1>
      <section className="intro">
        <p>
          I'm Matt. I'm a brazilian fullstack web developer. I have an interest
          in <span>web development</span>, <span>algorithms</span>,{" "}
          <span>data structures</span> and <span>design</span>.
        </p>
        <p>
          I have been working with web development since late 2019, with my main
          stack being <span>Javascript</span>(React and NodeJS).
        </p>
        <p>
          I like to work on all ends of the project, from the design to the
          infrastructure, which has motivated me to learn different subjects and
          develop different skills.
        </p>
        <p>
          At the end of the day, all I want to do is to build elegant solutions
          for different kinds of problems.
        </p>
      </section>
      <section className="skills">
        <h2>skills</h2>
        <SkillChain
          mainColor="#61dafb"
          chain={reactChain}
          major={{ value: "ReactJS", major: true }}
        />
        <SkillChain
          mainColor="#339933"
          chain={nodeChain}
          major={{ value: "NodeJS", major: true }}
        />
        <SkillChain
          mainColor="#0db7ed"
          major={{ value: "Docker", major: true }}
          chain={dockerChain}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <SkillChain
            mainColor="#f05032"
            major={{ value: "Git", major: true }}
            chain={[]}
          />
          <SkillChain
            mainColor="#5651ff"
            major={{ value: "Figma", major: true }}
            chain={[]}
          />
          <SkillChain
            mainColor="#007acc"
            major={{ value: "Typescript", major: true }}
            chain={[]}
          />
        </div>
      </section>
      <section className="experience">
        <h2>experience</h2>
        <Experience
          title="Intern at JFRN (10/20 - current)"
          body={`I am currently an intern at the Federal Department of Justice for my state.
                I am a part of the project management team, meaning that I coordinate different teams
                of the workforce and solve problems that need to be solved.`}
          imageUrl="/images/jfrn.png"
          imageAlt="eai"
        />
        <Experience
          title="Fullstack web developer at DNA Center (01/21 - current)"
          body={`I'm also currently a fullstack web developer at a company called DNA Center.
                 I work on building internal systems that they use to make the work easier.`}
          imageUrl="/images/dna.png"
          imageAlt="eai"
        />
      </section>
    </main>
  );
};

export default About;
