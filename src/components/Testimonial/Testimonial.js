/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="w-full min-h-[500px] bg-[#F6E4F6] flex justify-center items-center mt-[9rem]">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1322px] px-14 w-full">
        {/* Review Text Frame */}
        <div
          className="flex flex-col justify-center mt-6 items-start gap-4 w-full sm:w-[770px] mb-8 sm:mb-0"
          data-aos="fade-left"
        >
          <p className="text-[#0A122A] font-poppins text-[22px] sm:text-[27px] font-light">
            &quot;Bookley made my trip planning so easy! I found a beautiful beachfront apartment in Bali at an amazing price. The booking process was smooth, and the host was super responsive. I'll definitely be using Bookley for all my future travels!&quot;
          </p>

          {/* Author Container */}
          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <span className="text-[#0A122A] text-center font-poppins text-[18px] sm:text-[23px] font-semibold">
              Jessica Carter
            </span>
            <span className="text-[#0A122A] text-center font-poppins text-[16px] sm:text-[22px] font-light">
              Marketing Manager at Wanderlust Co.
            </span>
          </div>
        </div>

        {/* Image Container */}
        <div
          className="relative w-full sm:w-[480px] h-[587px] flex-shrink-0"
          data-aos="fade-right"
        >
          <Image
            src="/images/man.png"
            alt="Testimonial"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
