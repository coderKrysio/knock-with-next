"use client";

import DisplayUser from "@/components/DisplayUser";
import { KnockAPI } from "@/lib/users";
import { useEffect } from "react"

export default function Home() {
  const userData1 = {
    cuid: "cljijrahe00003h6fpiwtcjp1",
    name: "coderKrysio",
    email: "coderKrysio@gmail.com",
  }

  const userData2 = {
    cuid: "cljiobki200013h6fn0zpcj6t",
    name: "anushree",
    email: "anushreejaiswal.srn@gmail.com",
  }

  useEffect(() => {
    KnockAPI.setIdentify(userData1)
    KnockAPI.getUser(userData1.cuid)
    KnockAPI.setIdentify(userData2)
    KnockAPI.getUser(userData2.cuid)
  },[userData1.cuid, userData2.cuid])

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <h1
      className="text-xl font-semibold m-4"
      >knock with next</h1>

      <div
      className="flex gap-[40px] justify-center items-center"
      >
        <DisplayUser userData={userData1} />
        <DisplayUser userData={userData2} />
      </div>
    </main>
  )
}
