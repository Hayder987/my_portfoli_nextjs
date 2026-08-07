import Hero from "@/components/hero/Hero";
import About from "@/components/sections/about";
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
    </main>
  );
}