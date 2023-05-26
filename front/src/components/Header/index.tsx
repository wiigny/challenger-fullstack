"use client";

import { useContact } from "@/hooks/UserHook";
import { BiExit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@chakra-ui/react";
import { TUserUpdate } from "../Modals/ModalUserUpdate/validator";
import Button from "../Button";
import logo from "../../assets/logo.png";
import Image from "next/image";
import ModalUserUpdate from "../Modals/ModalUserUpdate";

interface IHeaderProps {
  updateUser: (data: TUserUpdate) => void;
}

export default function Header({ updateUser }: IHeaderProps) {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setUser } = useContact();

  const loggout = () => {
    localStorage.clear();
    setUser(undefined);
    router.push("/login");
  };

  return (
    <header className="bg-gray-200">
      <div className=" w-4/5 m-auto p-5 flex justify-between items-center">
        <figure className="flex items-center justify-between w-[50px]">
          <Image src={logo.src} alt="Kenzie Contacts" width={50} height={50} />
        </figure>
        <nav className="flex gap-8 items-center">
          <Button type="button" click={onOpen}>
            {<FaUserEdit size={26} />}
          </Button>
          <Button type="button" click={loggout}>
            {<BiExit size={26} />}
          </Button>
        </nav>
      </div>
      {isOpen && (
        <ModalUserUpdate
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          updateUser={updateUser}
        />
      )}
    </header>
  );
}
