import Form from "@/components/Form";
import Input from "@/components/Input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import addContactSchema, { TAddContact } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";

interface IModalAddProps {
  addContact: (data: TAddContact) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function ModalAdd({
  addContact,
  isOpen,
  onOpen,
  onClose,
}: IModalAddProps) {
  const { register, handleSubmit } = useForm<TAddContact>({
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
                label="Nome"
                register={register("name")}
                required={true}
              />
              <Input
                type="email"
                placeholder="email"
                label="E-mail"
                register={register("email")}
              />
              <Input
                type="text"
                placeholder="telefone"
                label="Telefone"
                register={register("telephone")}
                required={true}
              />
              <Button type="submit">Salvar</Button>
            </Form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
