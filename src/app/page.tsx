import Link from "next/link";
import { MultiStep } from "@/features/multi-steps";
import { AppCards } from "@/features/the-basics/app-cards";
import { AppStore } from "@/features/the-basics/app-store";
import { FeedBack } from "@/features/the-basics/feed-back";
import { Trash } from "@/features/trash";
import { buttonVariants } from "@/features/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <Trash />
      <AppCards />
      <div className="mt-10">
        <AppStore />
      </div>
      <div className="mt-10">
        <FeedBack />
      </div>

      <div className="mt-10">
        <MultiStep />
      </div>

      <Link className={cn(buttonVariants(), "mt-8")} href="/the-basics">
        アニメーションの基本
      </Link>
    </div>
  );
}
