import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
