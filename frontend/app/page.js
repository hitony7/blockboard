// ./frontend/app/page.js
import Hero from "@/app/components/Hero";
import Features from "./components/Features";
import heroImage from '@/images/hero.svg'
import Form from '@/app/components/Form'

export default function Home() {
  return (
      <div>
        <Hero
          heading={
            <>
              Invest in <span className="text-primary">Tomorrow's Giants</span>, Today
            </>
          }
          subheading="Invest in exciting startups with confidence and ease. Our innovative platform gives you a say in company decisions and clear visibility into your investments. Join the future of startup funding with as little as $100."
          buttonText="Join Now"
          buttonLink="/investors"
          imageSrc={heroImage}
        />
        <Features />
        <Form />
    </div>
  );
}   