import GradientMesh from "./GradientMesh";
import GridBackground from "./GridBackground";
import Particles from "./Particles";


export default function BackgroundEffects() {

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        overflow-hidden
      "
    >

      <GradientMesh />

      <GridBackground />

      <Particles />


      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.75))]
        "
      />


    </div>
  );
}