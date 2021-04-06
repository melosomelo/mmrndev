interface Props {
  mainColor: string;
  major: SkillNode;
  chain: SkillNode[];
}

const SkillChain: React.FC<Props> = ({ mainColor, major, chain }) => {
  return (
    <div className="chain-container">
      <div
        className="skill-node major"
        style={{
          backgroundColor: mainColor,
          marginRight: chain.length === 0 ? "3rem" : null,
        }}
      >
        {major.value}
      </div>
      {chain.length > 0 && (
        <div
          className="connector"
          style={{
            animationDelay: `${(chain.length + 1) * 0.35}s`,
            backgroundImage:
              chain.length > 0
                ? `linear-gradient(90deg, ${mainColor} 9.38%, ${
                    chain[0].color || mainColor
                  } 100%)`
                : null,
          }}
        />
      )}
      {chain.map((node, index, array) => (
        <>
          <div
            key={node.value}
            className="skill-node minor"
            style={{
              backgroundColor: node.color ? node.color : mainColor,
              animationDelay: `${(index + 1) * 0.3}s`,
            }}
          >
            {node.value}
          </div>
          {index !== array.length - 1 && (
            <div
              key={`connector-${node.value}`}
              className="connector"
              style={{
                animationDelay: `${(array.length + 1) * 0.35}s`,
                backgroundImage: `linear-gradient(90deg, ${
                  node.color || mainColor
                } 25%, ${array[index + 1].color || mainColor})`,
              }}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default SkillChain;
