"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderItem = {
  href: string;
  title: string;
};

const Header = () => {
  const pathname = usePathname();

  const navItems: HeaderItem[] = [
    {
      href: "/",
      title: "home",
    },
    {
      href: "/works",
      title: "works",
    },
    {
      href: "/about-me",
      title: "about-me",
    },
    {
      href: "/contacts",
      title: "contacts",
    },
  ];

  return (
    <nav className="flex justify-end px-[176px] py-8">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link key={index} href={item.href}>
            <Button
              className={`text-base font-medium ${
                !isActive && "text-muted-foreground"
              }`}
              variant={"ghost"}
            >
              <p className={"text-primary"}>#</p>
              {item.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Header;
