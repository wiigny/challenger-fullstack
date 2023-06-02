import { IInputProps } from "./types";

export default function Input({
  type,
  placeholder,
  label,
  required,
  register,
  value,
  defaultValue,
  fieldClasses,
}: IInputProps) {
  return (
    <fieldset className={`flex items-start mt-3 mb-1 flex-col ${fieldClasses}`}>
      <label className="">{label}</label>
      <input
        className="appearance-none border-2 border-solid border-gray-200 rounded-lg p-1 px-3 w-full"
        type={type}
        placeholder={placeholder}
        {...register}
        required={required}
        value={value}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
}
