"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-out",
    });
  }, []);

  const cardData = [
    {
      title: "Find Your Perfect Stay",
      subtitle: "Book cozy hotels around your area or anywhere across the globe",
      hotels: [
        {
          country: "South Africa",
          name: "Sunny Hotel",
          price: "$100/night",
          image: "/images/first.png",
        },
        {
          country: "United Kingdom",
          name: "James Sir Hotel",
          price: "$100/night",
          image: "/images/second.png",
        },
      ],
    },
    {
      title: "Rent A Home",
      subtitle: "Rent Resorts, Apartments, Cabins, or a Cozy Home down the sea or inland",
      hotels: [
        {
          country: "Hawaii",
          name: "Summer Side Hotel",
          price: "$100/night",
          image: "/images/third.png",
        },
        {
          country: "Russia",
          name: "Cozy Mount Cabin",
          price: "$100/night",
          image: "/images/fourth.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1123px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-[70px] justify-center items-center p-4 lg:p-0 lg:mt-20">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full lg:w-[526px] p-6 lg:p-[65px_26px] flex flex-col items-start gap-2.5 rounded-lg bg-[#297373]"
          data-aos="fade-up"
          data-aos-delay={`${index * 300}`} // Staggered fade-up effect for main cards
        >
          {/* Text Container */}
          <div className="w-full lg:w-[450px] flex flex-col items-center gap-4">
            <h2 className="text-white text-center font-poppins text-2xl lg:text-[30px] font-semibold">
              {card.title}
            </h2>
            <p className="text-[#D9D9D9] text-center font-poppins text-base lg:text-lg">
              {card.subtitle}
            </p>
          </div>

          {/* White Cards Container */}
          <div className="flex flex-col items-start gap-6 w-full mt-8 lg:mt-12">
            {card.hotels.map((hotel, hotelIndex) => (
              <div
                key={hotelIndex}
                className="flex p-2 lg:p-[7px_12px] flex-col justify-end items-center gap-2.5 self-stretch rounded-xl bg-white"
                data-aos="fade-up"
                data-aos-delay={`${index * 300 + hotelIndex * 200}`} // Stagger hotels inside cards
              >
                <div className="w-full lg:w-[439px] flex justify-between items-center">
                  {/* Info Container */}
                  <div className="flex items-start gap-2.5">
                    <div className="relative w-[60px] h-[60px] lg:w-[69px] lg:h-[69px]">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start lg:items-center gap-1.5">
                      {/* Country Badge */}
                      <div className="flex h-[20px] px-2.5 justify-center items-center gap-2.5 rounded-[50px] bg-[#B8B8F3]">
                        <span className="text-white font-inter text-xs lg:text-sm">
                          {hotel.country}
                        </span>
                      </div>
                      {/* Hotel Details */}
                      <div className="flex flex-col items-start gap-1">
                        <h3 className="text-black font-poppins text-sm font-medium">
                          {hotel.name}
                        </h3>
                        <span className="text-[#B8B8F3] font-poppins text-xs font-semibold">
                          {hotel.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Book Button */}
                  <button className="flex w-[80px] lg:w-[93px] h-[32px] lg:h-[36px] px-2.5 justify-center items-center gap-2.5 rounded-lg bg-[#B8B8F3]">
                    <span className="text-[#0A122A] text-center font-poppins text-xs lg:text-sm font-medium">
                      Book
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
