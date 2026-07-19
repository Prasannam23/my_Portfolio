"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1,
      ease: [0.2, 0.7, 0.3, 1],
      onUpdate(latest) {
        node.textContent = Math.round(latest).toString();
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span ref={ref}>0</span>;
}
