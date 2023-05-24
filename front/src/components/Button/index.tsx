import { IButtonProps } from "./types";

export default function Button({ type, children, classes }: IButtonProps) {
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
