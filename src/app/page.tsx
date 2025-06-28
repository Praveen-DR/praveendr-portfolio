import About from "./about/page";
import Blogs from "./blogs/page";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactPage from "./contact/page";



export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Projects />
      <ContactPage/>
    </main>
    
  );
}
