import React from "react";
import Link from "next/link";
import TrexGame from "../components/TrexGame";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col  justify-between font-mono text-lg lg:flex">
        <p>Hi there, I'm Srivatsav Auswin !</p> <p>Know more about me as a</p>
        <section className="flex flex-row max-w-md justify-between">
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
      </div>
      <TrexGame />
    </main>
  );
}
