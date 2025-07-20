
import Hero from "./components/Hero";
import Contact from "./contact/page";
import ContactPage from "./contact/page";
import SkillsSection from "./skills/page";
import RecentProjects from "./projects/page";
import Certificates from "./components/Certificates";
import ExperienceSection from "./components/ExperienceSection";




export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection/>
      <ExperienceSection/>
      <RecentProjects/>
      <div className="h-16 md:h-24 w-full"></div>
      <Certificates/>
      <Contact/>
    
    </main>
    
  );
}
