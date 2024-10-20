import MarketingLayout from "@/layout/MarketingLayout";
import Hero from "@/components/Hero";
import Form from '@/components/Form'
import heroImage from "@/images/hero-startups.svg";


export default function Startups() {
  return (
    <MarketingLayout>
      <Hero
        heading={
          <>
            Get Funded, <br/><span className="text-primary">Grow Faster</span>
          </>
        }
        subheading="Secure the funding you need to scale your startup. Our platform connects you with passionate investors who believe in your vision. Get the financial boost you need to reach your next milestone with as little friction as possible."
        buttonText="Join Now"
        buttonLink="#form"
        imageSrc={heroImage}
      />
      <Form api="/api/subscribe-startup" />
    </MarketingLayout>
  );
}