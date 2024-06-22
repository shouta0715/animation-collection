import React from "react";
import { StatusButton } from "@/features/status-button/components";
import { AppCards } from "@/features/the-basics/app-cards";
import { CheckButton } from "@/features/the-basics/check-button";
import { DynamicHeight } from "@/features/the-basics/dynamic-height";
import { FullWindow } from "@/features/the-basics/full-window";
import { ScaleUp } from "@/features/the-basics/scale-up";
import { ShowSeconds } from "@/features/the-basics/sow-seconds";
import { Tabs } from "@/features/the-basics/tabs";

export default function Page() {
  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-bold">The Basics</h2>
      <div className="flex flex-wrap gap-10 px-16 py-10">
        <AppCards />
        <DynamicHeight />
        <ScaleUp />
        <FullWindow />
        <Tabs />
        <ShowSeconds />
        <CheckButton />
        <StatusButton />
      </div>
    </div>
  );
}
