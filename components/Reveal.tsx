"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = (motion as any)[as];

  if (shouldReduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, scale: 0.985, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
