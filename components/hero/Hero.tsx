import Container from "@/components/common/Container";
import BackgroundEffects from "@/components/effects/BackgroundEffects";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <BackgroundEffects />

      <Container className="relative z-10">
        <HeroContent />
      </Container>
    </section>
  );
}