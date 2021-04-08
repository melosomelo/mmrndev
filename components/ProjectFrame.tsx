interface Props {
  project: Project;
  onClick: () => void;
  selected: boolean;
}

const ProjectFrame: React.FC<Props> = ({
  project: { logo, title },
  onClick,
  selected,
}) => {
  console.log(logo);
  return (
    <div
      className={`project-frame ${selected ? "selected" : ""}`}
      title={title}
      onClick={onClick}
    >
      <img
        src={logo}
        alt={`Logo of the project ${title}`}
        id={title.split(" ").join("-").split(".").join("-")}
      />
    </div>
  );
};

export default ProjectFrame;
