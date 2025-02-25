import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button = ({ children, fullWidth, ...props }: ButtonProps) => {
  const buttonClassName = `button ${fullWidth && "fullWidth"}`;
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
