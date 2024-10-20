import NavigationDashboard from "@/components/NavigationDashboard";
import Footer from "@/components/Footer";
import { headingFont } from "@/utils/fonts";

export default function Dashboard() {
  return (
    <div className="container mx-w-7xl">
      <NavigationDashboard />
        <main>
            <div className="my-60 h-full flex items-center justify-center">
                <h1 className={`${headingFont.className} text-3xl`}>Dashboard</h1>
            </div>
        </main>
      <Footer />
    </div>
  );
}
