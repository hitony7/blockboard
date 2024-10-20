"use client";
import Image from "next/image";
import { headingFont } from "@/app/utils/fonts";

export default function Hero({ heading, subheading, buttonText, buttonLink, imageSrc }) {

  const handleScroll = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(buttonLink);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-min-screen flex flex-col-reverse lg:flex-row items-center justify-center mt-12 md:mt-24">
      <div className="text-center lg:text-left p-8 lg:w-1/2">
        <h1 className={`${headingFont.className} text-4xl lg:text-6xl font-bold mb-4`}>
          {heading}
        </h1>
        <p className="text-gray-300 text-opacity-75 text-lg lg:text-xl mb-6">
          {subheading}
        </p>
        <button 
          onClick={handleScroll} 
          className="px-8 py-3 bg-primary font-medium hover:bg-opacity-90 transition"
        >
          {buttonText}
        </button>
      </div>
      
      <div className="w-full lg:w-1/2 p-8">
        <Image
          src={imageSrc}
          alt="Hero Image"
          className="w-full h-auto border border-background"
          priority={true}
        />
      </div>
    </section>
  );
}