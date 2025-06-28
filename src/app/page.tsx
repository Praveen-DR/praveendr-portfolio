import About from "./about/page";
import Blogs from "./blogs/page";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./contact/page";
import ContactPage from "./contact/page";



export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About/>
      <Projects />
      <Blogs/>
      <Contact/>
    </main>
    
  );
}
