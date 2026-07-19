"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import VerifyCard from "./VerifyCard";
import { repos } from "@/lib/data";

export default function Verify() {
  const [copied, setCopied] = useState(false);
  const rawResponses = useRef<Record<string, unknown>>({});

  const handleData = (label: string, data: unknown) => {
    rawResponses.current[label] = data;
  };

  const handleCopy = async () => {
    const text = JSON.stringify(rawResponses.current, null, 2);
    try {
      await navigator.clipboard.writeText(text || "{}");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard may be unavailable — fail silently, same as original behavior
    }
  };

  return (
    <section id="verify">
      <SectionHead index="06" label="Verify" title="Don't take the resume's word for it" />
      <Reveal>
        <p className="verify-intro">
          This panel calls GitHub&apos;s public API directly from your browser, right now, and
          pulls the real numbers off each repo below — last commit, primary language, open
          issues, stars. Nothing here is a screenshot or a cached figure typed in by hand.
        </p>
      </Reveal>
      <Reveal>
        <p className="verify-note">
          <span className="live-dot" />
          Fetched live via api.github.com on page load — inspect the network tab if you don&apos;t
          believe it.
        </p>
      </Reveal>

      <div className="verify-grid">
        {repos.map((repo) => (
          <VerifyCard key={repo.full} label={repo.label} full={repo.full} onData={handleData} />
        ))}
      </div>

      <Reveal className="verify-actions">
        <button className="verify-json-btn" onClick={handleCopy}>
          Copy raw JSON response ↗
        </button>
        <motion.span
          className="verify-copied"
          animate={{ opacity: copied ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          Copied to clipboard.
        </motion.span>
      </Reveal>
    </section>
  );
}
