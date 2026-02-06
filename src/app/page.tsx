import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Platform from "@/components/Platform";
import Intelligence from "@/components/Intelligence";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Technology />
      <Platform />
      <Intelligence />
      <CallToAction />
      <Footer />
    </main>
  );
}
