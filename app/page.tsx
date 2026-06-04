import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Calculator } from "@/components/Calculator";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Offer } from "@/components/Offer";
import { RescuedCall } from "@/components/RescuedCall";
import { First30Days } from "@/components/First30Days";
import { WeeklyReport } from "@/components/WeeklyReport";
import { Objections } from "@/components/Objections";
import { FAQ } from "@/components/FAQ";
import { Lead } from "@/components/Lead";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Calculator />
        <Problem />
        <HowItWorks />
        <WhyDifferent />
        <Offer />
        <RescuedCall />
        <First30Days />
        <WeeklyReport />
        <Objections />
        <FAQ />
        <Lead />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
