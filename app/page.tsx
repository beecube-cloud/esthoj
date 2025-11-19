import { AboutSectionHover } from "@/components/sections/about";
import HeroParallax from "@/components/sections/hero";
import PartnersSectionTailwind from "@/components/sections/partners";
import { StatsSectionAnimated } from "@/components/sections/stats";

export default function Home() {
  return (
    <>
    <HeroParallax />
    <PartnersSectionTailwind />
    <AboutSectionHover />
    <StatsSectionAnimated />
    </>
  );
}
