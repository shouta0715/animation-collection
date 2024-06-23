import Link from "next/link";
import { AppCards } from "@/features/the-basics/app-cards";
import { AppStore } from "@/features/the-basics/app-store";
import { FeedBack } from "@/features/the-basics/feed-back";
import { buttonVariants } from "@/features/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <AppCards />
      <div className="mt-10">
        <AppStore />
      </div>
      <div className="mt-10">
        <FeedBack />
      </div>

      <Link className={cn(buttonVariants(), "mt-8")} href="/the-basics">
        アニメーションの基本
      </Link>
    </div>
  );
}
