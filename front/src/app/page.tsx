"use client";
import Button from "@/components/Button";
import { useContact } from "@/hooks/UserHook";

export default function Home() {
  const { user } = useContact();

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
          <h2>Contatos</h2>
          <ul></ul>
        </section>
      </div>
    </main>
  );
}
