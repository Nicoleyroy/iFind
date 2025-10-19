import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
];

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,_rgba(99,102,241,0.25),_rgba(17,24,39,1))]"
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt="Logo"
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.2c19fbc4.svg"
                className="h-8 w-auto"
              />
              <span className="font-semibold text-white">IFind</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 p-2.5 text-gray-400"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-300 hover:text-white">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-gray-900/90 p-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-gray-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="mt-16 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-semibold text-white hover:text-indigo-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Dialog>

      {/* Hero Section */}
      <main className="relative isolate px-6 pt-32 lg:px-8 text-center">
        <div className="">
          <div className="rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-white/20 hover:ring-white/30">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-400">
              Read more →
            </a>
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Find it fast.
        </h1>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Find it smart.
        </h1>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Find it with iFind.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
          “What’s lost isn’t gone — sometimes it just needs to be found.”
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="/login"
            className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Get started
          </a>

        </div>
      </main>
    </div>
  );
}
