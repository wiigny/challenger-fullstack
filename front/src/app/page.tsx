"use client";
import Button from "@/components/Button";
import ListContacts from "@/components/ListContacts";
import ModalAdd from "@/components/Modals/ModalAdd";
import { useContact } from "@/hooks/UserHook";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Home() {
  const { user, addContact } = useContact();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main className="bg-gray-800 h-full py-52 ">
      <div className="w-4/5 m-auto flex flex-col gap-8">
        <section className="bg-gray-200 rounded-xl pt-40 relative">
          <div className="flex justify-center items-center absolute m-auto w-full top-[-100px] flex-col gap-5">
            <Button
              type="button"
              classes="w-48 h-48 flex justify-center items-center rounded-full bg-sky-500 text-5xl text-white border-2 border-sky-500 hover:border-2 hover:border-black duration-300 hover:after:content-['Editar'] hover:after:absolute hover:after:bottom-[40px] after:text-xl hover:after:bg-white hover:after:text-black hover:after:p-1 after:rounded-lg hover:after:ml-32 hover:after:mb-3"
            >
              {user && user.firstName[0] + user.lastName[0]}
            </Button>
            <h1 className="font-bold text-2xl">
              {user && user.firstName + user.lastName}
            </h1>
          </div>
        </section>
        <section className="bg-gray-200 rounded-xl">
          <div className="flex justify-between pt-5 px-5">
            <h2 className="text-2xl">Contatos</h2>
            <Button type="button" click={onOpen}>
              {<AiOutlineUserAdd size={24} />}
            </Button>
          </div>
          {!user?.contacts.length ? (
            <h3>Você não possuí contatos</h3>
          ) : (
            <ul className="flex flex-col gap-4 p-5">
              {user.contacts.map((contact, index) => (
                <div
                  key={index}
                  className="border-2 border-solid border-gray-400 p-2 rounded-lg"
                >
                  <ListContacts
                    id={contact.id}
                    contacts={contact}
                    classes="flex gap-12"
                  />
                </div>
              ))}
            </ul>
          )}
        </section>
      </div>
      <ModalAdd
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        addContact={addContact}
      />
    </main>
  );
}
