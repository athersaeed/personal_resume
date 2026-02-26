import { HeroSection } from "@/components/section/HeroSection";
import { SkillsSection } from "@/components/section/SkillsSection";
import { WorkSection } from "@/components/section/work-section";
import { ProjectsSection } from "@/components/section/projects-section";
import { EducationSection } from "@/components/section/EducationSection";
import { ContactSection } from "@/components/section/ContactSection";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
      <HeroSection />
      <div className="mt-32 space-y-32">
        <SkillsSection />
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
