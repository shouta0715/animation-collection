/* eslint-disable react/no-array-index-key */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useTimer } from "@/features/counter/hooks";
import { Button } from "@/features/ui/button";

export function Counter() {
  const { padTime, isRunning, onChangeRunning } = useTimer();

  return (
    <div className="flex w-60 justify-between rounded-full bg-primary p-2">
      <Button
        className="size-10 rounded-full bg-[#5A3C07] hover:bg-[#694608]"
        onClick={onChangeRunning}
        size="icon"
      >
        {isRunning ? (
          <Pause className="size-4 fill-current  text-[#FDB000]" />
        ) : (
          <Play className="size-4 fill-current text-[#FDB000]" />
        )}
      </Button>

      <div className="flex px-2">
        <span key="0" className="text-center text-3xl tabular-nums text-white">
          0:
        </span>
        {padTime.map((time, index) => (
          <AnimatePresence key={index} initial={false} mode="popLayout">
            <motion.span
              key={time}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-3xl tabular-nums text-white"
              exit={{ opacity: 0, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
            >
              {time}
            </motion.span>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}
