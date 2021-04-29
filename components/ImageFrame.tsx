interface Props {
  id?: string;
}

const ImageFrame: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="image-frame" {...props}>
      <div className="frame-rectangle top" />
      <div className="frame-rectangle left" />
      <div className="frame-rectangle right" />
      <div className="frame-rectangle bottom" />
      {children}
      <div className="frame-square top-left" />
      <div className="frame-square top-right" />
      <div className="frame-square bottom-left" />
      <div className="frame-square bottom-right" />
    </div>
  );
};

export default ImageFrame;
