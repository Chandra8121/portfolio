import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ConnectSection from "@/components/ConnectSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ConnectSection />
      <footer className="py-10 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-[10px]">
            CS
          </div>
          <span className="font-display text-sm font-semibold text-foreground">
            Chandra<span className="text-primary">Sekhar</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-display tracking-wider">
          © 2024 Chandra S. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
