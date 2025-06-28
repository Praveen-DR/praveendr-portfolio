import About from "./skills/page";
import Blogs from "./blogs/page";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./contact/page";
import ContactPage from "./contact/page";
import SkillsSection from "./skills/page";
import RecentProjects from "./projects/page";



export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection/>
      <RecentProjects/>
      <Projects />
      <Blogs/>
      <Contact/>
    </main>
    
  );
}
