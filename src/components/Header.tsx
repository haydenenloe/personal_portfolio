"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Now useState is being used

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Hayden Enloe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/#projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link href="/#contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden pt-4">
            <Link href="/#about" className="block py-2">
              About
            </Link>
            <Link href="/#projects" className="block py-2">
              Projects
            </Link>
            <Link href="/#contact" className="block py-2">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
