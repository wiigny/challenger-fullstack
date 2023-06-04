"use client";

import { useContact } from "@/hooks/UserHook";
import { BiExit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@chakra-ui/react";
import { TUserUpdate } from "../Modals/ModalUserUpdate/components/validator";
import { Button } from "../Button";
import { ModalUserUpdate } from "../Modals/ModalUserUpdate";
import { BsFillTelephoneFill } from "react-icons/bs";
import { destroyCookie } from "nookies";

interface IHeaderProps {
  updateUser: (data: TUserUpdate) => void;
}

export function Header({ updateUser }: IHeaderProps) {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setUser } = useContact();

  const loggout = () => {
    destroyCookie(null, "token_schedule");
    setUser(undefined);
    return router.push("/login");
  };

  return (
    <header className="bg-gray-200">
      <div className=" w-4/5 m-auto py-5 flex justify-between items-center">
        <figure className="flex items-center justify-between w-[50px]">
          <BsFillTelephoneFill color="#54b9cb" size={34} />
        </figure>
        <nav className="flex gap-8 items-center">
          <Button
            type="button"
            classes="flex w-[100px] flex-col-reverse items-center hover:font-bold duration-300"
            click={onOpen}
          >
            <p>Editar Perfil</p>
            {<FaUserEdit size={26} />}
          </Button>
          <Button
            type="button"
            classes="flex w-[50px] flex-col-reverse items-center hover:font-bold duration-300"
            click={loggout}
          >
            <p>Sair</p>
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
