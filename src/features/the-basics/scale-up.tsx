"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/features/ui/button";

export function ScaleUp() {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  return (
    <div className="grid gap-40">
      <Button
        className="w-max"
        onClick={() => setShouldAnimate(!shouldAnimate)}
      >
        Animate
      </Button>

      <motion.div
        animate={{
          scale: shouldAnimate ? 1.5 : 1,
          y: shouldAnimate ? -40 : 0,
        }}
        className="size-20 rounded-2xl bg-yellow-500"
      />
    </div>
  );
}
