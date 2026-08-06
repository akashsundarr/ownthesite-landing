import React from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo className="text-[2.2rem]" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
