"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

import { buttonVariants } from "@/features/ui/button";

export function DynamicHeight() {
  const [showExtraContent, setShowExtraContent] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      <button
        className={clsx(
          buttonVariants({
            variant: "outline",
          })
        )}
        onClick={() => setShowExtraContent((b) => !b)}
        type="button"
      >
        Toggle height
      </button>
      <div className="mt-4 rounded-lg bg-primary  text-background">
        <motion.div
          animate={{ height: height || "auto" }}
          transition={{ duration: 0.15 }}
        >
          <div ref={ref}>
            <div className="p-4">
              <h1>Fake Family Drawer</h1>
              <p>
                This is a fake family drawer. Animating height is tricky, but
                satisfying when it works.
              </p>
              {showExtraContent ? (
                <p>
                  This extra content will change the height of the drawer. Some
                  even more content to make the drawer taller and taller and
                  taller...
                </p>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
