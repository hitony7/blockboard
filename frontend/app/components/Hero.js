// ./frontend/app/components/Hero.js

import Image from "next/image";
import heroImage from "@/images/hero.png"
import { headingFont } from "@/app/utils/fonts"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="text-center lg:text-left p-8 lg:w-1/2">
        <h1 className={`${headingFont.className} text-4xl lg:text-6xl font-bold mb-4`}>Invest in <span className="text-primary">Tomorrow's Giants</span>, Today</h1>
        <p className="text-foreground text-opacity-75 text-lg lg:text-xl mb-6">Invest in exciting startups with confidence and ease. Our innovative platform gives you a say in company decisions and clear visibility into your investments. Join the future of startup funding with as little as $100.</p>
        <a href="#cta" className="px-8 py-3 bg-primary font-medium hover:bg-opacity-90 transition">
          Join Now
        </a>
      </div>
      <div className="w-full lg:w-1/2 p-8">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full h-auto"
          priority={true}
        />
      </div>
    </section>
  );
}
