"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { CheckIcon, CopyIcon } from "lucide-react";
import React from "react";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export function CheckButton() {
  const [copied, setCopied] = React.useState(false);

  return (
    <button
      aria-label="Copy code snippet"
      onClick={() => {
        navigator.clipboard.writeText("yarn add framer-motion");
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }}
      type="button"
    >
      <AnimatePresence initial={false} mode="wait">
        {copied ? (
          <motion.span
            key="checkmark"
            animate="visible"
            exit="hidden"
            initial="hidden"
            transition={{ duration: 0.1 }}
            variants={variants}
          >
            <CheckIcon />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            animate="visible"
            exit="hidden"
            initial="hidden"
            transition={{ duration: 0.1 }}
            variants={variants}
          >
            <CopyIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
