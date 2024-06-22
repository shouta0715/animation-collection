"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const TABS: { name: string; bg: string }[] = [
  { name: "Tab 1", bg: "#3B82F6" },
  { name: "Tab 2", bg: "#10B981" },
  { name: "Tab 3", bg: "#F59E0B" },
  { name: "Tab 4", bg: "#EF4444" },
];

export function Tabs() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="w-full">
      <ul className="flex w-full justify-between">
        {TABS.map((tab, index) => {
          return (
            <motion.li
              key={index}
              className={clsx(
                "relative cursor-pointer px-4 py-2 text-sm outline-none transition-colors duration-300",
                active === index ? "text-primary" : "text-muted-foreground"
              )}
              layout
              onFocus={() => setActive(index)}
              onMouseOver={() => setActive(index)}
              tabIndex={0}
            >
              <span className="relative text-inherit">{tab.name}</span>

              {active === index ? (
                <motion.div
                  className="absolute inset-0 -z-10 rounded-md bg-black/5"
                  layoutId="tab"
                />
              ) : null}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
