import Form from "@/components/Form";
import Input from "@/components/Input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import userUpdateSchema, { TUserUpdate } from "./validator";
import { useContact } from "@/hooks/UserHook";

interface IModalUserUpdateProps {
  updateUser?: (data: TUserUpdate) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ModalUserUpdate({
  isOpen,
  onClose,
  onOpen,
  updateUser,
}: IModalUserUpdateProps) {
  const { user } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdate>({
    resolver: zodResolver(userUpdateSchema),
  });

  const submit: SubmitHandler<TUserUpdate> = (data) => {
    updateUser!(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form submit={handleSubmit(submit)}>
              <Input
                type="text"
                placeholder="Digite seu Nome"
                label="Nome: "
                register={register("firstName")}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <p className="text-sm text-red-900">
                  {errors.firstName.message}
                </p>
              )}
              <Input
                type="text"
                placeholder="Digite seu Sobrenome"
                label="Sobrenome: "
                register={register("lastName")}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <p className="text-sm text-red-900">
                  {errors.lastName.message}
                </p>
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
                type="password"
                placeholder="Digite sua senha ou uma nova"
                label="Senha: "
                register={register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-900">
                  {errors.password.message}
                </p>
              )}
              <Input
                type="tel"
                placeholder="telefone"
                label="Telefone: "
                register={register("telephone")}
                defaultValue={user?.telephone}
              />
              {errors.telephone && (
                <p className="text-sm text-red-900">
                  {errors.telephone.message}
                </p>
              )}
              <div className="w-full flex justify-end mt-8 mb-2">
                <Button
                  type="submit"
                  classes="bg-sky-500 p-3 px-4 rounded-lg text-white text-right hover:bg-sky-700 duration-300"
                >
                  Atualizar
                </Button>
              </div>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
