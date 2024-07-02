"use client";

import Link from "next/link";
import React from "react";
import photobg from "../../../public/img/photobg.png";
export default function Developer() {
  return (
    <main
      className="flex flex-col min-h-screen justify-between p-5"
      style={{
        backgroundImage: `url(${photobg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Link
        className="text-black underline font-mono absolute text-left"
        href="/"
      >
        Home
      </Link>
      <section className="absolute opacity-50 p-14 right-0 text-white bottom-0 text-right font-[Caudex]">
        <h1 className="text-lg">"The Dance"</h1>
        <p className="text-xs">
          The intense dance for the classic kutthu beats captured with motion
          blur
        </p>
        <p className="text-xs">Chennai, TamilNadu</p>
      </section>
    </main>
  );
}
