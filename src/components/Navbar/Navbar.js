"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center p-6 md:p-12 bg-white z-50">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/Logo.svg" alt="Logo" width={73} height={87} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex flex-1 justify-center items-center gap-10">
        <li>
          <Link href="/" className="text-2xl hover:text-[#D0DB97] font-semibold font-poppins">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-2xl hover:text-[#D0DB97] font-semibold font-poppins">
            Booking
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-2xl hover:text-[#D0DB97] font-semibold font-poppins">
            Pricing
          </Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex justify-end items-center gap-10">
        <Link href="/login" className="text-2xl font-semibold hover:text-[#D0DB97]">
          Login
        </Link>
        <button className="w-[181px] h-[79px] px-4 flex justify-center items-center rounded-lg bg-[#B8B8F3] hover:bg-[#297373] hover:text-white">
          <span className="text-2xl font-semibold font-poppins">Sign Up</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/images/menu.png" alt="Menu" width={40} height={40} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A122A] flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 100 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <Link href="/" className="text-white text-2xl font-semibold hover:text-[#D0DB97]" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/about" className="text-white text-2xl font-semibold hover:text-[#D0DB97]" onClick={() => setIsOpen(false)}>
          Booking
        </Link>
        <Link href="/contact" className="text-white text-2xl font-semibold hover:text-[#D0DB97]" onClick={() => setIsOpen(false)}>
          Pricing
        </Link>

        {/* Mobile Buttons */}
        <Link
          href="/login"
          className="text-white text-2xl font-semibold mt-4 hover:text-[#D0DB97]"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <button
          className="w-[181px] h-[79px] px-4 flex justify-center items-center rounded-lg hover:bg-[#297373] hover:text-white text-[#0A122A] text-2xl font-semibold bg-[#B8B8F3]"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
