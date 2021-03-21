import classnames from "classnames";

interface ButtonProps {
  className?: string;
  appearance?: "ghost" | "solid" | "text" | "icon";
  children: string | JSX.Element;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  appearance = "solid",
  type = "button",
  ...other
}) => {
  const classes = classnames("button", `button_${appearance}`, className);

  return (
    <button type={type} className={classes} {...other}>
      <div className="button__inner">{children}</div>
    </button>
  );
};

export default Button;
