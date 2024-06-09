import { About } from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {Hero}  from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
      <div className=" h-screen w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
