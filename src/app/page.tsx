import { Counter } from "@/features/counter/components";
import { StatusButton } from "@/features/status-button/components";
import { ScaleUp } from "@/features/the-basics/scale-up";

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-10">
      <StatusButton />
      <Counter />
      <div className="rounded-lg border px-16 py-10">
        <h2 className="mb-4 text-center text-2xl font-bold">The Basics</h2>
        <ScaleUp />
      </div>
    </div>
  );
}
