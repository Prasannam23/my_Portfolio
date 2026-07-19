"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./Stagger";
import { stack } from "@/lib/data";

type Selected = { category: string; name: string } | null;

export default function Stack() {
  const [selected, setSelected] = useState<Selected>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleClick = (category: string, name: string) => {
    setSelected((prev) => {
      const next = prev && prev.category === category && prev.name === name ? null : { category, name };
      if (next) {
        requestAnimationFrame(() => {
          panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
      return next;
    });
  };

  const data = selected ? stack[selected.category][selected.name] : null;

  return (
    <section id="stack">
      <SectionHead index="04" label="Stack" title="Click a block, see how I actually used it" />
      <Reveal>
        <p className="stack-intro">
          Every technology below has proven itself in a real project above — not just a resume
          line. Click any block to see the specific architectural decision it enabled.
        </p>
      </Reveal>

      <div>
        {Object.entries(stack).map(([category, items]) => (
          <Reveal className="stack-cat" key={category}>
            <div className="stack-cat-label">{category}</div>
            <StaggerGroup className="block-row" as="div">
              {Object.keys(items).map((name) => {
                const isActive = selected?.category === category && selected?.name === name;
                return (
                  <StaggerItem as="div" key={name}>
                    <motion.button
                      type="button"
                      className={`block ${isActive ? "active" : ""}`}
                      onClick={() => handleClick(category, name)}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ y: -1 }}
                    >
                      {name}
                    </motion.button>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </Reveal>
        ))}
      </div>

      <div ref={panelRef}>
        <AnimatePresence mode="wait">
          {selected && data && (
            <motion.div
              key={`${selected.category}-${selected.name}`}
              className="detail-panel"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ paddingBottom: 2 }}>
                <div className="detail-title">
                  {selected.name} — {data[0]}
                </div>
                <div className="detail-body">{data[1]}</div>
                {data[2] && <div className="detail-proj">Used in: {data[2]}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
