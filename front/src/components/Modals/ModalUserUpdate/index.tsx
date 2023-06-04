"use client";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormInfos } from "./components/FormInfosModal";
import { FormPass } from "./components/FormPassModal";

interface IModalUserUpdateProps {
  updateUser?: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ModalUserUpdate({
  isOpen,
  onClose,
  onOpen,
  updateUser,
}: IModalUserUpdateProps) {
  const [modal, setModal] = useState("infos");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modal === "infos" ? "Atualizar Perfil" : "Atualizar Senha"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modal === "infos" ? (
              <FormInfos updateUser={updateUser} setModal={setModal} />
            ) : (
              <FormPass updateUser={updateUser} setModal={setModal} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
