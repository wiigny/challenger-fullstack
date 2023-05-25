import { IInputProps } from "./types";

export default function Input({
  type,
  placeholder,
  label,
  required,
  register,
  value,
}: IInputProps) {
  return (
    <fieldset>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        required={required}
        value={value}
      />
    </fieldset>
  );
}
