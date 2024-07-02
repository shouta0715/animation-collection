"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/features/ui/button";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "This is step 1",
    description:
      "Usually the first step is the easiest one. But not in this case. This is the hardest step of all. You have to do a lot of things to complete this step.",
  },

  {
    title: "This is step 2",
    description:
      "This is the second step. It's a bit easier than the first one. But it's still hard. You have to do a lot of things to complete this step.",
  },

  {
    title: "This is step 3",
    description:
      "This is the third step. It's a bit easier than the second one. But it's still hard. You have to do a lot of things to complete this step.",
  },
];

type Direction = "forward" | "backward";

const variants: Variants = {
  initial: (direction: Direction) => ({
    opacity: 0,
    translateX: direction === "forward" ? "100%" : "-100%",
  }),
  animate: {
    opacity: 1,
    translateX: "0",
  },
  exit: (direction: Direction) => ({
    opacity: 0,
    translateX: direction === "forward" ? "-100%" : "100%",
  }),
};

export function MultiStep() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [direction, setDirection] = React.useState<Direction>("forward");

  const content = useMemo(() => {
    return steps.map((step, index) => {
      return (
        <div key={index}>
          <div className="mb-6">
            <h1>{step.title}</h1>
            <p>{step.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 rounded-md" />
            <Skeleton className="h-4 rounded-md" />
            <Skeleton className="h-4 rounded-md" />
          </div>
        </div>
      );
    })[currentStep];
  }, [currentStep]);

  return (
    <div className="relative overflow-hidden rounded-md border p-4">
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={currentStep}
          animate="animate"
          custom={direction}
          exit="exit"
          initial="initial"
          transition={{ duration: 5, bounce: 0, type: "spring" }}
          variants={variants}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex justify-between">
        <Button
          disabled={currentStep === 0}
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
            setDirection("backward");
          }}
          type="button"
          variant="outline"
        >
          Previous Step
        </Button>
        <Button
          disabled={currentStep === 2}
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
            setDirection("forward");
          }}
          type="button"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
}
