"use client";

import { IResponseUser } from "@/context/UserContext/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Button from "../Button";
import "./style.scss";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { useContact } from "@/hooks/UserHook";

const fileTypes = ["JPG", "PNG", "GIF"];

export const FigureAvatar = ({ user }: { user?: IResponseUser }) => {
  const { updateImage, img } = useContact();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file: File) => {
    setFile(file);
  };

  return (
    <figure className="figure_edit absolute top-[-60px] w-full flex justify-center items-end ">
      <div
        className="w-[120px] h-[120px] rounded-full object-cover relative cursor-pointer overflow-hidden "
        onClick={onOpen}
      >
        {user?.avatar ? (
          <Image
            width={400}
            height={400}
            alt="avatar"
            src={img ? img : user.avatar}
            className="h-full object-cover"
            priority={true}
          />
        ) : (
          <p className="bg-[#54b9cb] h-full flex items-center justify-center text-white text-2xl cursor-pointer hover:scale-105 duration-300 relative">
            {user &&
              user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}
          </p>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atualizar Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              classes="drag_drop"
            />
            <p className="pt-4 text-sm">{file && `File: ${file.name}`}</p>
            <div className="w-full flex justify-end mt-8 mb-2">
              <Button
                type="submit"
                classes="bg-[#54b9cb] hover:bg-[#348e9e] p-3 px-4 rounded-lg text-white text-right  duration-300"
                click={() => {
                  if (file) {
                    updateImage(file);
                    onClose();
                  }
                }}
              >
                Atualizar
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </figure>
  );
};
