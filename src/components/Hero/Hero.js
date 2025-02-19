"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    // Initialize AOS with a faster animation
    AOS.init({
      duration: 600,  // Faster duration
      easing: 'ease-out', // A smooth easing for a fast yet nice effect
    });
  }, []);

  return (
    <div className="hero flex justify-center items-center relative mt-12">
      <section className="text-center relative z-10 px-8" data-aos="fade-up">
        <p className="text-[rgba(10,18,42,0.4)] text-lg font-medium" data-aos="fade-up">
          Introducing Bookley
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[50px] md:leading-[75px] text-center"
          data-aos="fade-up" // Apply fade-up effect to the heading
        >
          <span className="text-[#B8B8F3]">Book</span>, Rent and Plan <br /> Sleeping Destinations <br /> Across The Globe
        </h1>
        <button
          className="flex md:w-[208px] md:h-[79px] w-[156px] h-[58px] px-2.5 justify-center items-center gap-2.5 rounded-lg bg-[#B8B8F3] mt-8 mx-auto hover:bg-[#297373] hover:text-white"
          data-aos="fade-up" // Apply fade-up effect to the button
        >
          <span className="text-center md:text-2xl text-[1rem] font-semibold leading-normal font-poppins">
            Start Booking
          </span>
        </button>
      </section>
    </div>
  );
};

export default Hero;
