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
          subheading="Invest in exciting startups with confidence and ease. Our innovative platform gives you a say in company decisions and clear visibility into your investments."
          buttonText="Join Now"
          buttonLink="#form"
          imageSrc={heroImage}
        />
        <Features />
        <Form api="/api/subscribe-investor" />
    </div>
  );
}   