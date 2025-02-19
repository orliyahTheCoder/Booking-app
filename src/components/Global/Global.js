"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Global = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-3 w-full max-w-[1059px] mx-auto mt-[8rem] px-4"
      data-aos="fade-up" // Add AOS fade-up attribute
    >
      <h2
        className="text-center leading-[2.6rem] text-3xl sm:text-3xl font-semibold font-poppins"
        data-aos="fade-up" // Apply fade-up effect to the heading
      >
        We have partnered with various rental <br /> properties worldwide.
      </h2>
      <p
        className="text-[rgba(10,18,42,0.4)] text-[0.8rem] sm:text-base font-medium text-center"
        data-aos="fade-up" // Apply fade-up effect to the paragraph
      >
        Bookley your one-way renting site.
      </p>
      <Image
        src="/images/earth.png"
        alt="Earth"
        width={558}
        height={713}
        className="w-[80%] sm:w-[60%] max-w-[558px] h-auto"
        data-aos="fade-up" // Apply fade-up effect to the image
      />
    </div>
  );
};

export default Global;
