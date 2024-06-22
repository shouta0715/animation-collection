"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/features/ui/button";

export function ShowSeconds() {
  const [show, setShow] = React.useState(true);

  return (
    <div className="grid gap-10">
      <Button className="w-max" onClick={() => setShow(!show)}>
        Animate
      </Button>

      {/* <motion.div animate={{}} className="size-20 rounded-2xl bg-yellow-500" /> */}
      {show ? (
        <motion.div
          className="size-20 bg-yellow-500"
          layoutId="square"
          style={{
            borderRadius: "16px",
          }}
        />
      ) : (
        <motion.div
          className="size-40 bg-pink-500"
          layoutId="square"
          style={{
            borderRadius: "16px",
          }}
        />
      )}
    </div>
  );
}
