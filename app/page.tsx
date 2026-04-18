"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Steps } from "@/components/sections/Steps";
import { Pricing } from "@/components/sections/Pricing";
import { PostExamples } from "@/components/sections/PostExamples";
import { ROI } from "@/components/sections/ROI";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <Stats />
      <WhyUs />
      <Steps />
      <Pricing />
      <PostExamples />
      <ROI />
      <FinalCTA />
    </>
  );
}
