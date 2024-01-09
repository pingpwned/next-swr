import Image from "next/image";
import { Inter } from "next/font/google";
import { Component } from "@/components/Component";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {[1, 2, 3, 4].map((n) => (
          <React.Fragment key={n}>
            <Component n={n} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
