// ./frontend/app/page.js
import MarketingLayout from "@/layout/MarketingLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import heroImage from '@/images/hero.svg'
import Form from '@/components/Form'

export default function Home() {
  return (
      <MarketingLayout>
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
    </MarketingLayout>
  );
}   