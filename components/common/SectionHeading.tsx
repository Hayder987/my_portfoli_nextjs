import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}