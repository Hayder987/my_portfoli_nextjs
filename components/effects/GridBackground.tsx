export default function GridBackground() {
  return (
    <div
      className="
pointer-events-none

absolute
inset-0

opacity-80

bg-[linear-gradient(rgba(255,255,255,.04)_2px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]

bg-size-[60px_60px]

mask-[radial-gradient(circle_at_center,black,transparent)]
"
    />
  );
}
