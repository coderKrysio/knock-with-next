"use client";

import DisplayUser from "@/components/DisplayUser";
import { KnockAPI } from "@/lib/knockapi";
import { useEffect, useState } from "react";

export default function Home() {
  const userData1 = () => {
    return {
      cuid: "cljijrahe00003h6fpiwtcjp1",
      name: "coderKrysio",
      email: "coderKrysio@gmail.com",
    };
  };

  const userData2 = () => {
    return {
      cuid: "cljiobki200013h6fn0zpcj6t",
      name: "anushree",
      email: "anushreejaiswal.srn@gmail.com",
    };
  };

  const setUsers = () => {
    KnockAPI.setIdentify(userData1);
    KnockAPI.setIdentify(userData2);
  };

  useEffect(() => {
    setUsers();
  });

  return (
    <main className="flex flex-col min-h-screen justify-center items-center w-screen">
      <h1 className="text-xl font-semibold m-4">knock with next</h1>

      <div className="flex flex-col gap-[40px] w-full p-7">
        <DisplayUser userData={userData1()} recipientId={userData2().cuid} />
        <DisplayUser userData={userData2()} recipientId={userData1().cuid} />
      </div>
    </main>
  );
}
