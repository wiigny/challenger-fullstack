import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  userUpdateInfosSchema,
  TUserUpdatePass,
  userUpdatePassSchema,
} from "./validator";
import { Button } from "@/components/Button";
import { Dispatch, SetStateAction } from "react";

export function FormPass({
  updateUser,
  setModal,
}: {
  updateUser?: (data: TUserUpdatePass) => void;
  setModal: Dispatch<SetStateAction<string>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdatePass>({
    resolver: zodResolver(userUpdatePassSchema),
  });

  const submit: SubmitHandler<TUserUpdatePass> = (data) => {
    updateUser!(data);
  };

  return (
    <Form submit={handleSubmit(submit)}>
      <Input
        type="password"
        placeholder="Digite uma nova senha"
        label="Senha: "
        register={register("password")}
      />
      {errors.password && (
        <p className="text-sm text-red-900">{errors.password.message}</p>
      )}
      <Input
        type="password"
        placeholder="Confirme a nova senha"
        label="Confirme: "
        register={register("confirm")}
      />
      {errors.confirm && (
        <p className="text-sm text-red-900">{errors.confirm.message}</p>
      )}

      <div className="w-full flex justify-end mt-8 mb-2 gap-2">
        <Button
          type="button"
          click={() => setModal("infos")}
          classes="border-2 border-[#348e9e] hover:bg-[#348e9e] hover:text-white text-gray-800 p-3 px-4 w-full flex justify-center items-center rounded-lg text-white text-right duration-300"
        >
          Editar Informações
        </Button>

        <Button
          type="submit"
          classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 rounded-lg text-white w-full flex justify-center items-center duration-300"
        >
          Atualizar Senha
        </Button>
      </div>
    </Form>
  );
}
