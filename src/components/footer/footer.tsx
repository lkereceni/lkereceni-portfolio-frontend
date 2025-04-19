import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-12 p-4 min-w-full px-[176px] py-8 border-t-2 border-muted-foreground">
      <div className="flex justify-between min-w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <p className="me-6">Lovro</p>
            <a
              className="text-muted-foreground"
              href="mailto:lovro.kereceni@gmail.com"
            >
              lovro.kereceni@gmail.com
            </a>
          </div>
          <p>Android and web frontend developer</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Media</h2>
          <div className="flex gap-4">
            <Link href={"https://github.com/lkereceni"} target="_blank">
              <SiGithub className="text-muted-foreground text-3xl" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/lovro-kere%C4%8Deni-25a997200/"
              }
              target="_blank"
            >
              <SiLinkedin className="text-muted-foreground text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">
        &copy; Copyright 2025. Mady by Lovro
      </p>
    </footer>
  );
};

export default Footer;
