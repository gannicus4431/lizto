"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const navigationLeft = [
  { name: "MENU", href: "#" },
  { name: "CHEF", href: "#" },
];

const navigationRight = [
  { name: "CONTACT", href: "#" },
  { name: "FOLLOW", href: "#" },
];

const allNavigation = [
  { name: "MENU", href: "#" },
  { name: "CHEF", href: "#" },
  { name: "CONTACT", href: "#" },
  { name: "FOLLOW", href: "#" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:hidden w-10"></div>

        {/* Desktop Navigation Layout - Hidden on mobile */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:gap-x-8">
          {/* Left Navigation */}
          <div className="flex gap-x-8">
            {navigationLeft.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl/6 font-normal text-amber-900 hover:text-amber-700"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 mx-4">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lizto</span>
              <Image
                alt="Lizto Logo"
                src="/images/logo.png"
                className="h-20 w-auto"
                width={80}
                height={80}
                priority
              />
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex gap-x-8">
            {navigationRight.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl/6 font-normal text-amber-900 hover:text-amber-700"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Logo - Centered on mobile */}
        <div className="flex lg:hidden flex-1 justify-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lizto</span>
            <Image
              alt="Lizto Logo"
              src="/images/logo.png"
              className="h-20 w-auto"
              width={80}
              height={80}
              priority
            />
          </a>
        </div>

        {/* Mobile Menu Button - On the right */}
        <div className="flex lg:hidden mr-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-4 text-amber-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Dialog with Transition */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog onClose={setMobileMenuOpen} className="relative z-50 lg:hidden">
          {/* Backdrop */}
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </TransitionChild>

          {/* Sliding Panel */}
          <div className="fixed inset-0 flex justify-end">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="relative ml-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-amber-50 px-6 pb-2 ring-1 ring-amber-200">
                  <div className="flex h-24 pr-2 shrink-0 items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 p-2.5 text-amber-800 hover:bg-amber-100 rounded-md transition-opacity duration-300 hover:opacity-70"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="h-10 w-10" />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {allNavigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="block rounded-md py-2 px-3 text-3xl font-normal text-amber-900 hover:bg-amber-100"
                                style={{ fontFamily: "'Crimson Text', serif" }}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}