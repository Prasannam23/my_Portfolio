"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const y = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      className="diagram-frame"
      style={{ rotate, y }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1], delay: 0.15 }}
    >
      <div className="corner tl" />
      <div className="corner tr" />
      <div className="corner bl" />
      <div className="corner br" />
      <svg viewBox="0 0 380 300">
        <circle className="core-ring r1" cx="190" cy="150" r="55" />
        <circle className="core-ring r2" cx="190" cy="150" r="55" />
        <circle className="core-ring r3" cx="190" cy="150" r="55" />

        <path className="spoke" d="M190,150 L190,60" style={{ animationDelay: ".1s" }} />
        <path className="spoke" d="M190,150 L275,105" style={{ animationDelay: ".25s" }} />
        <path className="spoke" d="M190,150 L275,195" style={{ animationDelay: ".4s" }} />
        <path className="spoke" d="M190,150 L190,240" style={{ animationDelay: ".55s" }} />
        <path className="spoke" d="M190,150 L105,195" style={{ animationDelay: ".7s" }} />
        <path className="spoke" d="M190,150 L105,105" style={{ animationDelay: ".85s" }} />

        <polygon className="core-hex" points="190,122 214,136 214,164 190,178 166,164 166,136" />
        <text className="core-text" x="190" y="153">CORE</text>

        <rect className="orbit-node" x="160" y="34" width="60" height="26" rx="3" style={{ animationDelay: "1.3s" }} />
        <text className="orbit-text" x="190" y="51" style={{ animationDelay: "1.4s" }}>CLIENT</text>

        <rect className="orbit-node" x="248" y="79" width="60" height="26" rx="3" style={{ animationDelay: "1.4s" }} />
        <text className="orbit-text" x="278" y="96" style={{ animationDelay: "1.5s" }}>CACHE</text>

        <rect className="orbit-node" x="248" y="182" width="60" height="26" rx="3" style={{ animationDelay: "1.5s" }} />
        <text className="orbit-text" x="278" y="199" style={{ animationDelay: "1.6s" }}>QUEUE</text>

        <rect className="orbit-node" x="160" y="214" width="60" height="26" rx="3" style={{ animationDelay: "1.6s" }} />
        <text className="orbit-text" x="190" y="231" style={{ animationDelay: "1.7s" }}>DATABASE</text>

        <rect className="orbit-node" x="66" y="182" width="66" height="26" rx="3" style={{ animationDelay: "1.7s" }} />
        <text className="orbit-text" x="99" y="199" style={{ animationDelay: "1.8s" }}>SUBSCRIBER</text>

        <rect className="orbit-node" x="66" y="79" width="66" height="26" rx="3" style={{ animationDelay: "1.8s" }} />
        <text className="orbit-text" x="99" y="96" style={{ animationDelay: "1.9s" }}>API GATEWAY</text>

        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M190,150 L190,60" begin="2.2s" />
        </circle>
        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M190,150 L275,105" begin="2.5s" />
        </circle>
        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.3s" repeatCount="indefinite" path="M190,150 L275,195" begin="2.8s" />
        </circle>
        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.7s" repeatCount="indefinite" path="M190,150 L190,240" begin="3.1s" />
        </circle>
        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M190,150 L105,195" begin="3.4s" />
        </circle>
        <circle className="pulse-dot" r="2.6">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M190,150 L105,105" begin="3.7s" />
        </circle>
      </svg>
    </motion.div>
  );
}
