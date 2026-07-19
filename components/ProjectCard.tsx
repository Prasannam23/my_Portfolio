"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, ReactNode, MouseEvent } from "react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  viz,
  variant = "default",
  delay = 0,
}: {
  project: Project;
  viz: ReactNode;
  variant?: "default" | "lowlevel";
  delay?: number;
}) {
  const [open, setOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={delay}>
      <motion.div
        className={`card ${variant === "lowlevel" ? "lowlevel" : ""}`}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ y: -3, boxShadow: "0 14px 30px -14px rgba(99,232,220,0.25)" }}
      >
        <div className="card-viz">{viz}</div>
        <div className="card-body">
          <div className="card-top">
            <div className="card-title">{project.title}</div>
            <div className="card-date">{project.date}</div>
          </div>
          <div className="card-kicker">{project.kicker}</div>
          <div className="card-desc">
            <RichText text={project.desc} />
          </div>
          <div className="tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <button className="spec-toggle" onClick={() => setOpen((v) => !v)}>
            {open ? "− Hide technical specs" : "+ Technical specs"}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                className="spec-list"
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: "auto", opacity: 1, marginBottom: 18 }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
              >
                {project.spec.map((row) => (
                  <li key={row.label}>
                    <span className="spec-label">{row.label}</span>
                    <span className="spec-value">{row.value}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="card-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className={`card-link ${link.kind}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.kind === "live" && <span className="live-dot" />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
