"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import ListContacts from "@/components/ListContacts";
import ModalContactAdd from "@/components/Modals/ModalContactAdd";

import { TUpdateContact } from "@/components/Modals/ModalContactUpdate/validator";

import { UserProvider } from "@/context/UserContext";
import { useContact } from "@/hooks/UserHook";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Home() {
  return (
    <UserProvider>
      <LoadingHome />
    </UserProvider>
  );
}

export function LoadingHome() {
  const { user, addContact, updateContact, removeContact, updateUser } =
    useContact();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const editOrRemove = (id: string, string?: string, data?: TUpdateContact) => {
    if (string === "update" && data) {
      updateContact(id, data);
    } else {
      removeContact(id);
    }
  };

  return (
    <>
      <Header updateUser={updateUser} />
      <main className="bg-gray-800 py-24">
        <div className="w-4/5 m-auto flex flex-col gap-8">
          <section className="bg-gray-200 rounded-xl py-8">
            <div className="flex flex-col px-5 m-auto w-full h-full gap-5">
              <h1 className="font-bold text-lg text-left">
                <span className="font-normal text-md">Bem-vindo: </span>
                {user &&
                  user.firstName[0].toUpperCase() +
                    user.firstName.substring(1) +
                    " " +
                    user.lastName[0].toUpperCase() +
                    user.lastName.substring(1)}
              </h1>
              <p className="text-md">Telefone: {user?.telephone}</p>
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
              <h3 className="text-xl text-center p-5 pb-16">
                Você não possuí contatos
              </h3>
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
                      classes="flex gap-12 justify-between px-2"
                      click={editOrRemove}
                    />
                  </div>
                ))}
              </ul>
            )}
          </section>
        </div>
        <ModalContactAdd
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          addContact={addContact}
        />
      </main>
    </>
  );
}
