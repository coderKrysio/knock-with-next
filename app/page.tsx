"use client";

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
    <main className="flex min-h-screen">
      knock testing
    </main>
  )
}
