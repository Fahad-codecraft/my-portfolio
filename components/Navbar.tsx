"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",

    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Approach",
      link: "#approach",
    }
  ];
  return (
    <div className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}