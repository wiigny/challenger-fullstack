import { IButtonProps } from "./types";

export default function Button({
  type,
  children,
  classes,
  click,
}: IButtonProps) {
  return (
    <button type={type} className={classes} onClick={click}>
      {children}
    </button>
  );
}
