import React from "react";
import { FullWindow } from "@/features/the-basics/full-window";
import { ScaleUp } from "@/features/the-basics/scale-up";
import { ShowSeconds } from "@/features/the-basics/sow-seconds";
import { Tabs } from "@/features/the-basics/tabs";

export default function Page() {
  return (
    <div>
      <h2 className="mb-4 text-center text-2xl font-bold">The Basics</h2>
      <div className="flex flex-wrap gap-10 px-16 py-10">
        <ScaleUp />
        <FullWindow />
        <Tabs />
        <ShowSeconds />
      </div>
    </div>
  );
}
