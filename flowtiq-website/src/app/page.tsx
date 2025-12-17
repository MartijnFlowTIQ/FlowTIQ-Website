import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSteps from "@/components/SolutionSteps";
import TrustSection from "@/components/TrustSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSteps />
      <TrustSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
