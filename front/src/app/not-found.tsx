"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1000);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl">
        <span className="font-bold">404</span> Page not found
      </h1>
      <p className="animate-[redirect_2s_infinite]">Redirecionando</p>
    </div>
  );
}
