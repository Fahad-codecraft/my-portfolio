"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";

export function Projects() {
  return (
    <div className="bg-black pb-10" id="projects">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/project/Promptmania.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/project/bank.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/project/Threads.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/project/Promptmania.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/project/Threads.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/project/Link-saver.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/project/Threads.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
];
