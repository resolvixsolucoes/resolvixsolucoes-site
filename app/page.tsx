import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { MethodSection } from "./components/MethodSection";
import { PilotSection } from "./components/PilotSection";
import { ServicesSection } from "./components/ServicesSection";
import { TransparencySection } from "./components/TransparencySection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <MethodSection />
        <TransparencySection />
        <PilotSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
