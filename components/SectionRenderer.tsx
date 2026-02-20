import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface Section {
  type: string;
  config?: Record<string, unknown>;
  items?: Array<Record<string, unknown>>;
}

interface Props {
  sections: Section[];
}

export function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={i} config={section.config} />;
          case "text":
            return <TextSection key={i} config={section.config} />;
          case "features":
            return <FeaturesSection key={i} config={section.config} items={section.items} />;
          case "contact":
            return <ContactSection key={i} config={section.config} />;
          default:
            return null;
        }
      })}
    </>
  );
}
