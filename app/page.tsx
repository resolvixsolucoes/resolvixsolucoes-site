import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { MethodSection } from "./components/MethodSection";
import { ServicesSection } from "./components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <MethodSection />
      </main>
    </>
  );
}
