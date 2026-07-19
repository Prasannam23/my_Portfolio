"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function DotNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      className="dot-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {navItems.map((item) => {
        const id = item.href.slice(1);
        const isActive = active === id;
        return (
          <a key={item.href} href={item.href} className={isActive ? "active" : ""}>
            <span className="dot" style={{ position: "relative" }}>
              {isActive && (
                <motion.span
                  layoutId="dot-glow"
                  className="dot-glow"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </span>
            <em>{item.label}</em>
          </a>
        );
      })}
    </motion.nav>
  );
}
