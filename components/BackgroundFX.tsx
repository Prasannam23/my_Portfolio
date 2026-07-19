"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundFX() {
  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 1600], [0, 180]);
  const orb2Y = useTransform(scrollY, [0, 1600], [0, -140]);
  const orb3Y = useTransform(scrollY, [0, 1600], [0, 120]);

  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 210);
      mouseY.set(e.clientY - 210);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <div className="blueprint-bg" />
      <div className="vignette" />
      <motion.div
        className="bg-orb orb-1"
        style={{ y: orb1Y }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-orb orb-2"
        style={{ y: orb2Y }}
        animate={{ x: [0, -70, 0], y: [0, 90, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-orb orb-3"
        style={{ y: orb3Y }}
        animate={{ x: [0, 60, 0], y: [0, -70, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="cursor-glow" style={{ x: glowX, y: glowY }} />
    </>
  );
}
