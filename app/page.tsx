import BackgroundEffects from "@/components/effects/BackgroundEffects";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />

      <div className="flex min-h-screen items-center justify-center">
        <h1 className="gradient-text text-6xl font-bold">
          Portfolio Coming Soon
        </h1>
      </div>
    </main>
  );
}