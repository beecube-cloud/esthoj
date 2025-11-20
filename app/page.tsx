import { AboutSectionHover } from "@/components/sections/about";
import { DivisionsSectionAnimated } from "@/components/sections/division";
import { FAQSectionAnimated } from "@/components/sections/faq";
import HeroParallax from "@/components/sections/hero";
import PartnersSectionTailwind from "@/components/sections/partners";
import { StatsSectionAnimated } from "@/components/sections/stats";
import { TeamSectionAnimated } from "@/components/sections/teamMembers";
import { sampleDivisions, sampleFAQs, sampleTeamMembers } from "@/utils/const";

export default function Home() {
  return (
    <>
    <HeroParallax />
    <PartnersSectionTailwind />
    <AboutSectionHover />
    <StatsSectionAnimated />
    <DivisionsSectionAnimated divisions={sampleDivisions} />
    <TeamSectionAnimated members={sampleTeamMembers} />
    <FAQSectionAnimated faqs={sampleFAQs} />
    </>
  );
}
