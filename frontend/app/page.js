// ./frontend/app/page.js
import Hero from "@/app/components/Hero";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <main>
        <Hero />
        {/* Add other sections here */}
      </main>
      <Footer />
    </div>
  );
}   