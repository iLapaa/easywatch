"use client";

import * as React from "react";

import { useState } from "react";
import ThemeChanger from "../theme-changer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SearchBar from "../search-movies";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Navigation = () => {
  const streamingTypes: { type: string; href: string; description: string }[] =
    [
      {
        type: "Home",
        href: "/",
        description:
          "Explore the Latest Upcoming Movies, Series, and Anime Releases",
      },
      {
        type: "Movies",
        href: "/movies",
        description:
          "Embark on a Cinematic Adventure: Explore a Selection of Upcoming and Released Movies Ready for Your Viewing Enjoyment",
      },
      {
        type: "Series",
        href: "/series",
        description:
          "Dive into Captivating TV Series: Discover Upcoming and Released Seasons for Your Binge-Watching Delight",
      },
      {
        type: "Anime",
        href: "/anime",
        description:
          "Immerse Yourself in Anime Magic: Explore Upcoming and Released Titles for Endless Watching Delights",
      },
    ];

  const [selectedType, setSelectedType] = useState("");

  React.useEffect(() => {
    setSelectedType(window.location.pathname);
  }, [selectedType]);

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent uppercase">
            {selectedType == "/"
              ? selectedType.replace("/", "home")
              : selectedType.replace("/", "")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] ">
              {streamingTypes.map((streamType, index) => {
                return streamType.href != selectedType ? (
                  <ListItem
                    href={streamType.href}
                    title={streamType.type}
                    key={index}
                  >
                    {streamType.description}
                  </ListItem>
                ) : null;
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default function Navbar() {
  return (
    <>
      <nav className="w-100 light:bg-fuchsia-800 h-20 dark:bg-indigo-950">
        <div className="container flex h-full items-center justify-between">
          <h1>EASYWATCH</h1>
          <Navigation />

          <div className="flex">
            <Link href="/search">
              <Button className="bg-transparent text-white outline-zinc-200 transition hover:scale-150 hover:bg-transparent">
                <MagnifyingGlassIcon />
              </Button>
            </Link>
            <UserButton userProfileMode="modal" afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
}
