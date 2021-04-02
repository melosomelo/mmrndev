interface Props {
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, disabled }) => {
  return <button className={disabled ? "disabled" : null}>{children}</button>;
};

export default Button;
