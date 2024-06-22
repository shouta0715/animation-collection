import Link from "next/link";
import { AppCards } from "@/features/the-basics/app-cards";
import { buttonVariants } from "@/features/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <AppCards />

      <Link className={cn(buttonVariants(), "mt-8")} href="/app-card">
        AppCardへ
      </Link>
    </div>
  );
}
