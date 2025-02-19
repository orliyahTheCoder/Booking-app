"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration
      easing: "ease-out",
    });
  }, []);

  const footerLinks = {
    "About Us": ["Our Story", "How It Works", "Trust & Safety", "Contact Us"],
    "Explore": ["Find Hotels", "Rent Apartments", "Vacation Homes", "Popular Destinations"],
    "Support": ["Help Center", "Booking Guide", "Cancellation Policy", "Payment & Refunds"],
    "Legal": ["Terms & Conditions", "Privacy Policy", "Host Guidelines", "FAQs"],
  };

  return (
    <footer 
      className="w-full min-h-[600px] bg-[#D0DB97] flex flex-col items-center py-16 mt-[12em]"
      data-aos="fade-up" // Footer slides up when in view
    >
      {/* Links Container */}
      <div className="inline-flex flex-wrap justify-center items-start gap-[85px] mb-16 mt-20">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex w-[179px] flex-col items-start gap-4 mb-8 sm:mb-0">
            <h3 className="text-[#0A122A] font-poppins text-2xl font-semibold">
              {title}
            </h3>
            <div className="flex flex-col justify-center items-start gap-2.5 self-stretch">
              {links.map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[#0A122A] font-poppins text-base font-normal hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full px-16">
        <hr className="h-[1px] bg-[#0A122A] mb-16" />
      </div>

      {/* Bottom Container */}
      <div className="w-[80%] h-[84px] flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="relative w-[63px] h-[75px] mb-4 sm:mb-0">
          <Image 
            src="/images/Logo.svg"
            alt="Bookely Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Copyright Text */}
        <p className="text-[rgba(10,18,42,0.40)] font-poppins text-lg font-light mb-4 sm:mb-0">
          bookely@copyright2025
        </p>

        {/* Sign Up Container */}
        <div className="flex w-full sm:w-[419px] h-[68px] items-center bg-white rounded-lg px-2">
          <input
            type="email"
            placeholder="enter email address"
            className="flex-1 text-[rgba(10,18,42,0.40)] text-center font-poppins text-lg font-light outline-none"
          />
          <button className="flex w-[144px] h-[55px] px-2.5 justify-center items-center gap-2.5 flex-shrink-0 rounded bg-[#B8B8F3]">
            <span className="text-[#0A122A] text-center font-poppins text-lg font-semibold">
              Send
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
