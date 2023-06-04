import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import addContactSchema, { TAddContact } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";

interface IModalAddProps {
  addContact: (data: TAddContact) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ModalContactAdd({
  addContact,
  isOpen,
  onOpen,
  onClose,
}: IModalAddProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddContact>({
    resolver: zodResolver(addContactSchema),
  });

  const submit: SubmitHandler<TAddContact> = (data) => {
    addContact(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form submit={handleSubmit(submit)}>
              <Input
                type="text"
                placeholder="nome"
                label="Nome: "
                register={register("name")}
                required={true}
              />
              {errors.name && (
                <p className="text-sm text-red-900">{errors.name.message}</p>
              )}
              <Input
                type="email"
                placeholder="email"
                label="E-mail: "
                register={register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-900">{errors.email.message}</p>
              )}
              <Input
                type="text"
                placeholder="telefone"
                label="Telefone: "
                register={register("telephone")}
                required={true}
              />
              {errors.telephone && (
                <p className="text-sm text-red-900">
                  {errors.telephone.message}
                </p>
              )}
              <div className="w-full flex justify-end mt-8 mb-2">
                <Button
                  type="submit"
                  classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 rounded-lg text-white text-right duration-300"
                >
                  Salvar
                </Button>
              </div>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
