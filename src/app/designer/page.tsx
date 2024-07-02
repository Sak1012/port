import React from "react";
import Link from "next/link";

export default function Developer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col  justify-between font-mono text-lg lg:flex">
        This page is under construction 🛠️
        <Link className="text-blue-900" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
