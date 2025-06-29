
import Hero from "./components/Hero";
import Contact from "./contact/page";
import ContactPage from "./contact/page";
import SkillsSection from "./skills/page";
import RecentProjects from "./projects/page";
import Certificates from "./components/Certificates";




export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection/>
      <RecentProjects/>
      <Certificates/>
      
      
      <Contact/>
    
    </main>
    
  );
}
