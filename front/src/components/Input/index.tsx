import { IInputProps } from "./types";

export default function Input({
  type,
  placeholder,
  label,
  required,
  register,
}: IInputProps) {
  return (
    <fieldset>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        required={required}
      />
    </fieldset>
  );
}
