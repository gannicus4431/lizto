"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigationLeft = [
  { name: "MENU", href: "#" },
  { name: "ABOUT US", href: "#" },
];

const navigationRight = [
  { name: "CONTACT US", href: "#" },
  { name: "FOLLOW US", href: "#" },
];

const allNavigation = [
  { name: "MENU", href: "#" },
  { name: "ABOUT US", href: "#" },
  { name: "CONTACT US", href: "#" },
  { name: "FOLLOW US", href: "#" },
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
      {/* Mobile Menu Dialog - LEFT SIDE */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-amber-50 p-6 sm:max-w-sm sm:ring-1 sm:ring-amber-200">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-amber-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-10" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-amber-200">
              <div className="space-y-2 py-6">
                {allNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-xl font-normal text-amber-900 hover:bg-amber-100"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
