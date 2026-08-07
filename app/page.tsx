import BackToTop from "@/components/common/back-to-top";
import Hero from "@/components/hero/Hero";
import DevelopmentProcess from "@/components/process/development-process";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";


export default function HomePage() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
      "
    >
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Services/>
       <DevelopmentProcess />
      <Contact/>

       <BackToTop />
    </main>
  );
}