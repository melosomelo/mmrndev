import ImageFrame from "../components/ImageFrame";

interface Props {
  title: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
}

const Experience: React.FC<Props> = ({ title, body, imageUrl, imageAlt }) => {
  return (
    <div className="experience-wrapper">
      <div className="experience-text-wrapper">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <ImageFrame>
        <img src={imageUrl} alt={imageAlt} />
      </ImageFrame>
    </div>
  );
};

export default Experience;
