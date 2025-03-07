"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Settings2Icon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                            src="https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg"
                            fill
                            alt="gbc"
                            className="absolute z-0 duration-100"
                          />
                          <div className="z-1 inset-0 absolute bg-gradient-to-br from-blue-50 group-hover:from-transparent to-blue-200 dark:from-blue-900 dark:to-blue-900 transition-colors"></div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/team" legacyBehavior passHref>
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
                    <li>
                      <Link href="/history" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/20 focus:text-blue-600 dark:focus:text-blue-300">
                          <div className="text-sm font-medium leading-none">
                            Careers
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                            Join our team and be part of our success
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    scrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-900 dark:text-white"
                  }
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="overflow-hidden relative flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md group"
                          href="/process"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-blue-600 dark:text-blue-300 group-hover:text-blue-50 z-10">
                            <Settings2Icon className="w-6 h-6" />
                            Our Process
                          </div>
                          <p className="text-sm leading-tight text-gray-600 dark:text-gray-300 group-hover:text-gray-100 z-10">
                            Learn about our process
                          </p>
                          <Image
                            src="https://gbcinfrastructure.in/material/front/assets/img/banner-new-3.jpg"
                            fill
                            alt="gbc"
                            className="absolute z-0 duration-100"
                          />
                          <div className="z-1 inset-0 absolute bg-gradient-to-br from-blue-50 group-hover:from-transparent to-blue-200 dark:from-blue-900 dark:to-blue-900 transition-colors"></div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <>
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900 focus:text-blue-600 dark:focus:text-blue-300"
                              href={service.href}
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
                                {service.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      scrolled
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Projects
                  </NavigationMenuLink>
                </Link>
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
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className={
              scrolled
                ? "text-gray-900 dark:text-white"
                : "text-gray-900 dark:text-white"
            }
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 z-50 border-b bg-white dark:bg-gray-900 shadow-lg md:hidden">
            <nav className="container py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const services = [
  {
    title: "Construction Management",
    description:
      "Expert management of construction projects from planning to completion",
    href: "/services/construction-management",
  },
  {
    title: "Infrastructure Development",
    description:
      "Building sustainable infrastructure for communities and businesses",
    href: "/services/infrastructure-development",
  },
];

export default Navbar;
