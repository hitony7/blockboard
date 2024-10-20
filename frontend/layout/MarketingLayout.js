import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MarketingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
