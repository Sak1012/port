import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arr from "@/assets/arr.svg";
export default function Home() {
  return (
    <main className="min-h-screen w-full  flex-col items-center justify-between">
      <section className="min-h-screen bg-grey w-full flex flex-col justify-between">
        <section className="w-full   flex flex-row  justify-center font-mono  lg:flex">
          <p className="text-black text-[225px] font-helvetica font-medium leading-[185px] p-10">
            Srivatsav Auswin
          </p>
          <p className="text-[225px] font-helvetica font-medium leading-[180px] p-10">
            *
          </p>
        </section>
        <section className="w-full h-96 flex flex-row items-center justify-between bg-yellow">
          <p className="font-helvetica font-medium text-[85px] leading-[80px] p-10">
            HI THERE,
            <br /> KNOW MORE ABOUT ME
          </p>
          <p className="font-helvetica font-medium text-[100px] leading-[180px] p-10">
            ↓
          </p>
        </section>
      </section>
      <section className="flex flex-row bg-grey w-full justify-between min-h-screen p-20">
        <Link className="text-blue-900" href="/developer">
          Developer
        </Link>
        <Link className="text-blue-900" href="/designer">
          Designer
        </Link>
        <Link className="text-blue-900" href="/photographer">
          Photographer
        </Link>
      </section>
    </main>
  );
}
