"use client"
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-3 w-full mx-auto mt-[3rem]" data-aos="fade-up">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold font-poppins">
          What we are all about
        </h2>
        <p className="text-[rgba(10,18,42,0.4)] text-base sm:text-lg font-medium text-center">
          We are a renting services provider.
        </p>
      </div>

      <div className="w-full h-auto bg-[#F6E4F6] flex justify-center items-center px-10 mt-16">
        <div className="max-w-[1200px] flex flex-col md:flex-row items-center gap-10">
          {/* Text Section (Slide Left) */}
          <div className="max-w-[600px] text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-medium font-poppins mt-6 md:mt-0">
              Discover Stays, Anywhere
            </h2>
            <p className="text-base sm:text-lg font-light font-inter mt-4">
              Bookley is your go-to platform for finding and renting homes,
              hotels, and apartments across the globe. Whether you're planning a
              vacation, a work trip, or a long-term stay, we connect you with the
              perfect place at the best price. With a seamless booking process and
              trusted hosts, your next stay is just a click away.
            </p>
          </div>
          {/* Image Section (Slide Right for a cool effect) */}
          <div className="flex justify-center mt-6 md:mt-0" data-aos="fade-right">
            <Image
              src="/images/allurawork.png"
              alt="Discover Stays"
              width={809} 
              height={571}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
