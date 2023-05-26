import { IUserContacts } from "@/context/UserContext/types";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import Button from "../Button";
import ModalContactUpdate from "../Modals/ModalContactUpdate";

interface ListContacts {
  id: string;
  contacts: IUserContacts;
  classes?: string;
  click: (id: string) => void;
}

export default function ListContacts({
  id,
  contacts,
  classes,
  click,
}: ListContacts) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <li id={id} className={classes}>
      <div>
        <p>Nome: {contacts.name}</p>
        <p>Telefone: {contacts.telephone}</p>
        {contacts.email && <p>Email: {contacts.email} </p>}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Button type="button" click={() => click(id)}>
          {<RiCloseCircleLine size={24} />}
        </Button>
        <Button type="button" click={onOpen}>
          {<AiOutlineEdit size={24} />}
        </Button>
      </div>
      {isOpen && (
        <ModalContactUpdate
          onClose={onClose}
          onOpen={onOpen}
          isOpen={isOpen}
          uuid={id}
          info={contacts}
          update={click}
        />
      )}
    </li>
  );
}
