"use client";

import { motion } from "framer-motion";
import React from "react";

export function FullWindow() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative flex h-[667px] w-[375px] items-center justify-center rounded-md border">
      <motion.button
        className="rounded-xl bg-yellow-500"
        layout
        onClick={() => setOpen(!open)}
        style={
          open
            ? {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }
            : { height: 48, width: 48, borderRadius: 12 }
        }
      />
    </div>
  );
}
