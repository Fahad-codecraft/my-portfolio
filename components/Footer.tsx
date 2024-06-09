'use client'
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "devnikarfahad@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };


  return (
    <footer className="h-[50vh] bg-black w-full p-10 relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready to take <span className="text-white">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:devnikarfahad@gmail.com">
          <MagicButton
            title={copied ? "Email is Copied!" : "Lets Get in touch"}
            icon={<FaLocationArrow />}
            handleClick={handleCopy}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
