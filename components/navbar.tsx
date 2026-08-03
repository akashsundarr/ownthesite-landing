import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-extrabold text-[1.4rem] tracking-tight text-[#1c232b]">
              OwnTheSite
            </span>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link
              className="text-[15px] font-semibold text-[#1c232b] border-b-[3px] border-[#343a40] pb-1"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-[15px] font-medium text-gray-500 hover:text-[#1c232b] transition-colors"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-[15px] font-medium text-gray-500 hover:text-[#1c232b] transition-colors"
              href="#"
            >
              Work
            </Link>
            <Link
              className="text-[15px] font-medium text-gray-500 hover:text-[#1c232b] transition-colors"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="text-[15px] font-medium text-gray-500 hover:text-[#1c232b] transition-colors"
              href="#"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              className="inline-flex items-center justify-center px-7 py-3 bg-[#343a40] text-white text-sm font-semibold rounded-full hover:bg-[#212529] transition-colors shadow-sm"
              href="#"
            >
              Let's Talk
              <span className="material-symbols-outlined ml-2 text-[18px]">
                north_east
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
