"use client";

import { MutationStatus } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader } from "lucide-react";
import React from "react";
import { useStatusButton } from "@/app/_features/status-button/hooks";
import { Button } from "@/components/ui/button";

const buttonCopy: Record<MutationStatus, React.ReactNode> = {
  idle: "Click me!",
  pending: <Loader className="animate-spin" size={24} />,
  error: "Oops! Something went wrong.",
  success: (
    <span className="flex items-center gap-2">
      <Check size={24} />
      Success!
    </span>
  ),
};

export function StatusButton() {
  const { mutate, status } = useStatusButton();

  return (
    <div>
      <Button
        className="w-60"
        disabled={status === "pending"}
        onClick={() => mutate(3000)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={status}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            initial={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
          >
            {buttonCopy[status]}
          </motion.span>
        </AnimatePresence>
      </Button>
    </div>
  );
}
