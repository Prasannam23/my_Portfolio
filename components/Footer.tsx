"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-inner">
          <Reveal>
            <h2>Let&apos;s build something that stays up.</h2>
            <p>
              Open to backend and full-stack roles — always up for a conversation about system
              design, real-time infra, or why C makes you appreciate garbage collection.
            </p>
            <MagneticButton href={`mailto:${socials.email}`} className="btn primary">
              {socials.email}
            </MagneticButton>
          </Reveal>
          <Reveal className="foot-links" as="div">
            <a href={`tel:${socials.phone}`}>{socials.phoneDisplay}</a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              github.com/Prasannam23 ↗
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin.com/in/prasannam-tiwari ↗
            </a>
          </Reveal>
        </div>
        <div className="copyright">
          © 2026 Prasannam Tiwari · rebuilt in Next.js, animated with Framer Motion.
        </div>
        <motion.div
          className="signature"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            className="signature-line"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.span
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            — <span>Prasannam Tiwari</span>
          </motion.span>
          <motion.span
            className="signature-line"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </footer>
  );
}
