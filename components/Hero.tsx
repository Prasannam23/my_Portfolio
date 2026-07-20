"use client";

import { motion } from "framer-motion";
import HeroDiagram from "./HeroDiagram";
import MagneticButton from "./MagneticButton";
import { liveLinks, socials } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero">
      <div id="top" />
      <div className="hero-top">
        <div>
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="blip" />
            Backend &amp; Systems Engineer
          </motion.div>

          <h1>
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    style={{ display: "inline-block" }}
  >
    Still learning how the big systems
  </motion.span>
  <br />
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.25 }}
    style={{ display: "inline-block" }}
  >
    hold together. <em>Scalable architecture</em>
  </motion.span>
  <br />
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    style={{ display: "inline-block" }}
  >
    is just the part I keep coming back to.
  </motion.span>
</h1>

          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            I design real-time, high-concurrency systems — from webhook delivery pipelines to
            hand-rolled caching layers in C. If it needs to stay up under load, it&apos;s the kind
            of problem I go looking for.
          </motion.p>

          <motion.div
            className="hero-links"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton href="#stack" className="btn primary">
              Explore the stack →
            </MagneticButton>
            <MagneticButton href={socials.github} className="btn ghost">
              GitHub ↗
            </MagneticButton>
            <MagneticButton href={socials.linkedin} className="btn ghost">
              LinkedIn ↗
            </MagneticButton>
             <MagneticButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost">
  Resume ↗
</MagneticButton>
             
          </motion.div>
        </div>

        <HeroDiagram />
      </div>

      <motion.div
        className="live-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="ll-label">Live right now</span>
        {liveLinks.map((link) => (
          <a key={link.label} className="ll-pill" href={link.href} target="_blank" rel="noopener noreferrer">
            <span className="ll-dot" />
            {link.label}
          </a>
        ))}
        <a className="ll-pill ghost-pill" href={socials.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a className="ll-pill ghost-pill" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </motion.div>
    </section>
  );
}
