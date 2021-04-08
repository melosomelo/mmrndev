import colorByTech from "../utils/colorByTech";

interface Props {
  tech: Tech;
}

const TechCard: React.FC<Props> = ({ tech, ...props }) => {
  return (
    <div
      {...props}
      className="tech-card"
      style={{ backgroundColor: colorByTech[tech] }}
      title={tech}
    >
      <img src={`/images/techs/${tech.toLowerCase()}.svg`} />
      {tech}
    </div>
  );
};

export default TechCard;
