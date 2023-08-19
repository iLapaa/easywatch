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

  const [selectedType, setSelectedType] = useState(window.location.pathname);

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
              className
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

  const cardType = (type: string) => {
    switch (type) {
      case "Home":
        return (
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Home</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Your Gateway to Entertainment Delight! Discover a Universe of
              Content - From Movies and Series to Anime, Something Enchanting
              for Every Taste and Mood.
            </p>
          </a>
        );
      case "Movies":
        return (
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Movies</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Lights, Camera, Excitement! Unveil the Best of Cinema - Explore a
              Collection of Latest and Classic Movie Titles for Every Film
              Enthusiast
            </p>
          </a>
        );
      case "Series":
        return (
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Series</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Unforgettable TV Journeys Await! Delve into a World of Series -
              Dive into Upcoming Seasons or Catch Up on the Latest Episodes of
              Your Favorite Shows.
            </p>
          </a>
        );

      case "Anime":
        return (
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Anime</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Enter the Enchanting Realm of Anime! From Anticipated Releases to
              Beloved Classics, Immerse Yourself in a Universe of Animated
              Adventures and Emotions
            </p>
          </a>
        );
    }
  };

  const [card, setCard] = useState();

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
    <nav className="w-100 h-20 light:bg-fuchsia-800 dark:bg-indigo-950">
      <div className="flex justify-between items-center h-full container">
        <h1>EASYWATCH</h1>
        <Navigation />

        <UserButton userProfileMode="modal" afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
