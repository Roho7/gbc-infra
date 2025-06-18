"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-black.png"
              alt="GBC Infrastructure Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span
              className={`hidden font-bold sm:inline-block text-xl ${
                scrolled
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              GBC Infrastructure
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu className="relative">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      scrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    scrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-900 dark:text-white"
                  }
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="overflow-hidden relative flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md group"
                          href="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-blue-600 dark:text-blue-300 group-hover:text-blue-50 z-10">
                            About GBC
                          </div>
                          <p className="text-sm leading-tight text-gray-600 dark:text-gray-300 group-hover:text-gray-100 z-10">
                            Learn about our company, mission, and values
                          </p>
                          <Image
                            src={'https://cdn.sanity.io/images/ipbdfel6/production/4ce1efa65408a12fb5dcca6b8344cfb8fcf79714-9000x6000.jpg'}
                            fill
                            alt="gbc"
                            className="absolute z-0 duration-100"
                          />
                          <div className="z-1 inset-0 absolute bg-gradient-to-br from-blue-50 group-hover:from-transparent to-blue-200 dark:from-blue-900 dark:to-blue-900 transition-colors"></div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/about#team" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-300">
                          <div className="text-sm font-medium leading-none">
                            Our Team
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Meet the experts behind our success
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      scrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/process" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      scrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Process
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>

                  <NavigationMenuTrigger
                    className={`${navigationMenuTriggerStyle()} ${
                      scrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                      <Link href="/projects?status=ongoing" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-300">
                          <div className="text-sm font-medium leading-none">
                            Ongoing Projects
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Explore our ongoing projects
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      </li>
                      <li>
                      <Link href="/projects?status=upcoming" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-300">
                          <div className="text-sm font-medium leading-none">
                            Upcoming Projects
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Explore our upcoming projects
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      </li>
                      <li>
                      <Link href="/projects?status=completed" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-300">
                          <div className="text-sm font-medium leading-none">
                            Completed Projects
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Explore our completed projects
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>

              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-2">
                    Contact
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Menu"
                className={
                  scrolled
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-900 dark:text-white"
                }
              >
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gray-900 border-none">
              <DrawerHeader className="border-b border-gray-800 pb-2">
                <DrawerTitle className="text-white">Menu</DrawerTitle>
              </DrawerHeader>
              <nav className="flex flex-col space-y-6 p-6">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors flex items-center"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors flex items-center"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors flex items-center"
                >
                  Services
                </Link>
                <Link
                  href="/process"
                  className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors flex items-center"
                >
                  Process
                </Link>
                <Link
                  href="/projects"
                  className="text-lg font-medium text-gray-100 hover:text-blue-400 transition-colors flex items-center"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
