import { DOMAttributes, ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  submit: () => void;
}

export default function Form({ children, submit }: IFormProps) {
  return <form onSubmit={submit}>{children}</form>;
}
