import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SocialMediaSidebar = () => {
  return (
    <div className="flex flex-col items-center gap-3 absolute left-4 top-0">
      <div className="w-px h-[191px] bg-muted-foreground"></div>
      <Link href={"https://github.com/lkereceni"} target="_blank">
        <SiGithub className="text-muted-foreground" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/lovro-kere%C4%8Deni-25a997200/"}
        target="_blank"
      >
        <SiLinkedin className="text-muted-foreground" />
      </Link>
    </div>
  );
};

export default SocialMediaSidebar;
