import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { useContact } from "@/hooks/UserHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { userUpdateInfosSchema, TUserUpdateInfos } from "./validator";
import { Button } from "@/components/Button";
import { Dispatch, SetStateAction } from "react";
import { ButtonDeleteUser } from "./ButtonDeleteAccount";

export function FormInfos({
  updateUser,
  setModal,
}: {
  updateUser?: (data: TUserUpdateInfos) => void;
  setModal: Dispatch<SetStateAction<string>>;
}) {
  const { user } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdateInfos>({
    resolver: zodResolver(userUpdateInfosSchema),
  });

  const submit: SubmitHandler<TUserUpdateInfos> = (data) => {
    updateUser!(data);
  };

  return (
    <Form submit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Digite seu Nome"
        label="Nome: "
        register={register("firstName")}
        defaultValue={user?.firstName}
      />
      {errors.firstName && (
        <p className="text-sm text-red-900">{errors.firstName.message}</p>
      )}
      <Input
        type="text"
        placeholder="Digite seu Sobrenome"
        label="Sobrenome: "
        register={register("lastName")}
        defaultValue={user?.lastName}
      />
      {errors.lastName && (
        <p className="text-sm text-red-900">{errors.lastName.message}</p>
      )}
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        label="E-mail: "
        register={register("email")}
        defaultValue={user?.email}
      />

      {errors.email && (
        <p className="text-sm text-red-900">{errors.email.message}</p>
      )}

      <Input
        type="tel"
        placeholder="telefone"
        label="Telefone: "
        register={register("telephone")}
        defaultValue={user?.telephone}
      />
      {errors.telephone && (
        <p className="text-sm text-red-900">{errors.telephone.message}</p>
      )}

      <div className="w-full flex flex-col-reverse sm:flex-row justify-end mt-8 mb-2 gap-4 pb-2">
        <Button
          type="button"
          click={() => setModal("pass")}
          classes="border-2 border-[#348e9e] hover:bg-[#348e9e] hover:text-white text-gray-800 p-3 px-4 w-full flex justify-center items-center rounded-lg text-white duration-300"
        >
          Editar Senha
        </Button>

        <Button
          type="submit"
          classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 w-full flex justify-center items-center rounded-lg text-white duration-300"
        >
          Atualizar Informações
        </Button>
      </div>
      <ButtonDeleteUser />
    </Form>
  );
}
