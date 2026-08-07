import GridBackground from "./GridBackground";

export default function BackgroundEffects() {
  return (
    <>
      <GridBackground />

      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-112.5 w-112.5 rounded-full bg-primary/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-112.5 w-112.5 rounded-full bg-secondary/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
    </>
  );
}