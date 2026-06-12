import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Calculator } from "@/components/Calculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Prize } from "@/components/Prize";
import { BeliefSafety } from "@/components/BeliefSafety";
import { BuiltForPlumbers } from "@/components/BuiltForPlumbers";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Offer } from "@/components/Offer";
import { RescuedCall } from "@/components/RescuedCall";
import { First30Days } from "@/components/First30Days";
import { WeeklyReport } from "@/components/WeeklyReport";
import { FastStart } from "@/components/FastStart";
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
        <Problem />
        <Calculator />
        <HowItWorks />
        <Prize />
        <BeliefSafety />
        <BuiltForPlumbers />
        <WhyDifferent />
        <Offer />
        <RescuedCall />
        <First30Days />
        <WeeklyReport />
        <FastStart />
        <FAQ />
        <Lead />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
