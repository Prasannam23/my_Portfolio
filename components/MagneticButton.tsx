"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

export default function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || !window.matchMedia("(hover: hover)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={`magnetic ${className ?? ""}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
