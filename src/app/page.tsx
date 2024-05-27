import { Counter } from "@/features/counter/components";
import { StatusButton } from "@/features/status-button/components";

export default function Home() {
  return (
    <div className="flex h-screen flex-col space-y-4">
      <StatusButton />
      <Counter />
    </div>
  );
}
