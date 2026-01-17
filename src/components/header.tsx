"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/consts";
import Image from "next/image";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1c1c1c]/80 backdrop-blur-md border-b border-[#333333]">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="font-semibold text-[#eaeaea]">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`text-sm transition-colors ${
                  activeItem === item.label
                    ? "text-gradient font-medium"
                    : "text-[#999999] hover:text-[#eaeaea]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-[#eaeaea]" />
          ) : (
            <Menu className="w-6 h-6 text-[#eaeaea]" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#1c1c1c]/95 border-t border-[#333333]">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.label)}
                  className={`text-sm transition-colors block py-2 ${
                    activeItem === item.label
                      ? "text-gradient font-medium"
                      : "text-[#999999] hover:text-[#eaeaea]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
