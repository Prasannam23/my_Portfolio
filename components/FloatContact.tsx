"use client";

import { motion } from "framer-motion";
import { socials } from "@/lib/data";

export default function FloatContact() {
  return (
    <motion.a
      className="float-contact"
      href={`mailto:${socials.email}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.3 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="fc-pulse" />
      Say hi
    </motion.a>
  );
}
