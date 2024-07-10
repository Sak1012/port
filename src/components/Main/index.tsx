import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen w-full flex-col items-center justify-between">
      <section className="min-h-screen bg-grey w-full flex flex-col justify-between">
        <section className="w-full   flex flex-row  justify-center font-mono  lg:flex">
          <p className="text-black text-7xl lg:text-[225px] font-helvetica font-medium lg:leading-[185px] p-10">
            Srivatsav Auswin
          </p>
          <p className="text-[225px] font-helvetica font-medium leading-[180px] p-10">
            *
          </p>
        </section>
        <section className="w-full h-96 flex flex-row items-center justify-between bg-yellow">
          <p className="font-helvetica font-medium text-[85px] leading-[80px] p-10">
            HELLO THERE,
            <br /> WELCOME TO MY WORLD
          </p>
          <p className="font-helvetica font-medium text-[100px] leading-[180px] p-10">
            ↓
          </p>
        </section>
      </section>
      <section className="flex flex-col justify-between bg-grey w-full min-h-screen">
        <p className="font-helvetica font-medium text-[85px] leading-[80px] p-10">
          {" "}
          KNOW MORE ABOUT ME
          <br /> AS A
        </p>
        <section className="flex flex-col items-end w-full justify-between font-helvetica font-medium  p-20 ">
          <section className="w-2/4 h-0 border border-black"></section>
          <section className="flex flex-row w-2/4 hover:text-yellow">
            <p className="font-helvetica font-medium text-9xl">1</p>
            <Link
              className="font-helvetica font-medium text-7xl hover:text-yellow pl-20"
              href="https://github.com/Sak1012"
            >
              Developer
            </Link>
          </section>
          <section className="w-2/4 h-0 border border-black"></section>
          <section className="flex flex-row w-2/4 hover:text-yellow">
            <p className="font-helvetica font-medium text-9xl">2</p>
            <Link
              className="font-helvetica font-medium text-7xl pl-20"
              href="/designer"
            >
              Designer
            </Link>
          </section>
          <section className="w-2/4 h-0 border border-black"></section>
          <section className="flex flex-row w-2/4 hover:text-yellow">
            <p className="font-helvetica font-medium text-9xl">3</p>
            <Link
              className="font-helvetica font-medium text-7xl pl-20"
              href="https://www.instagram.com/srivatsav_ak/"
            >
              Photographer
            </Link>
          </section>
        </section>
        <section className="flex flex-row justify-between w-full">
          <p className="text-lg font-helvetica font-medium pl-5 text-yellow">
            {" "}
            <span>↖︎ </span>
            SRIVATSAV AUSWIN
          </p>
          <p className="text-lg font-helvetica font-semibold text-yellow">
            {" "}
            ####
          </p>
          <p className="text-5xl font-helvetica font-medium pr-5 text-yellow">
            ***
          </p>
        </section>
      </section>
    </main>
  );
}
