"use client";
import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export function About() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased" id="about">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-3xl mx-auto my-2 text-2xl text-center relative z-10">
          I&apos;m a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Next.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
