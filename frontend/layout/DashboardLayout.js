import NavigationDashboard from "@/components/NavigationDashboard";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationDashboard />
      <main className="flex-grow container max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
  </div>
  )
}
