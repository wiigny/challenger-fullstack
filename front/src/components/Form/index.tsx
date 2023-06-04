import { ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  submit: () => void;
  classes?: string;
}

export function Form({ children, submit, classes }: IFormProps) {
  return (
    <form onSubmit={submit} className={classes}>
      {children}
    </form>
  );
}
