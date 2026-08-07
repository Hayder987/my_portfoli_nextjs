"use client";

import { useRef } from "react";
import {
  MotionValue,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface MouseParallaxReturn {
  ref: React.RefObject<HTMLDivElement | null>;

  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;

  x: MotionValue<number>;
  y: MotionValue<number>;

  handleMouseMove: (
    event: React.MouseEvent<HTMLDivElement>
  ) => void;

  handleMouseLeave: () => void;
}

export default function useMouseParallax(): MouseParallaxReturn {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
    mass: 0.5,
  });

  const x = useSpring(mouseX, {
    stiffness: 220,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 220,
    damping: 20,
  });

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue = ((px - centerX) / centerX) * 8;

    const rotateXValue = -((py - centerY) / centerY) * 8;

    mouseX.set(rotateYValue);

    mouseY.set(rotateXValue);
  }

  function handleMouseLeave() {
    mouseX.set(0);

    mouseY.set(0);
  }

  return {
    ref,

    rotateX,
    rotateY,

    x,
    y,

    handleMouseMove,
    handleMouseLeave,
  };
}