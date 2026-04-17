import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Observation from "@/components/Observation";
import Design from "@/components/Design";
import Foundation from "@/components/Foundation";
import Platform from "@/components/Platform";
import Performance from "@/components/Performance";
import Intelligence from "@/components/Intelligence";
import Swag from "@/components/Swag";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Observation />
      <Design />
      <Foundation />
      <Platform />
      <Performance />
      <Intelligence />
      <Swag />
      <CallToAction />
      <Footer />
    </main>
  );
}
