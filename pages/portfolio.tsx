import { useState } from "react";
import projects from "../utils/projects";
import ProjectFrame from "../components/ProjectFrame";
import ImageFrame from "../components/ImageFrame";
import TechCard from "../components/TechCard";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  return (
    <main className="portfolio">
      <h1>portfolio</h1>
      <section className="selected-project">
        <ImageFrame id="selected-project-screenshot">
          <img
            src={
              selectedProject.screenshot ||
              "https://thezebra.org/wp-content/uploads/2020/07/Training-Time-Aug2020-GR-with-ball-scaled.jpg"
            }
            alt="rhey"
          />
        </ImageFrame>
        <div className="selected-project-about">
          <h4>
            <a target="_blank" href={selectedProject.url}>
              {selectedProject.title}
            </a>
          </h4>
          <p>{selectedProject.description}</p>
          <p>Built with:</p>
          <div className="selected-project-techs">
            {selectedProject.techs.map((tech) => (
              <TechCard tech={tech} />
            ))}
          </div>
        </div>
      </section>
      <section className="all-projects">
        <section className="projects-segment commercial">
          <h2>clients</h2>
          <div className="projects-row">
            {projects
              .filter((project) => project.type === "commercial")
              .map((project) => (
                <ProjectFrame
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  selected={selectedProject.title === project.title}
                />
              ))}
          </div>
        </section>
        <section className="projects-segment personal">
          <h2>personal projects</h2>
          <div className="projects-row">
            {projects
              .filter((project) => project.type === "personal")
              .map((project) => (
                <ProjectFrame
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  selected={selectedProject.title === project.title}
                />
              ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Portfolio;
