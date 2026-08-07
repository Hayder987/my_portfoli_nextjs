import Container from "@/components/common/Container";
import BackgroundEffects from "@/components/effects/BackgroundEffects";

import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <section
    id="#home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
      "
    >

      <BackgroundEffects />


      <Container
        className="
          relative
          z-10
          py-20

          sm:py-24

          lg:py-32
        "
      >
        <HeroContent />
      </Container>


    </section>
  );
}