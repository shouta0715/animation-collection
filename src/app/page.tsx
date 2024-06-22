import Link from "next/link";
import { buttonVariants } from "@/features/ui/button";

export default function Home() {
  return (
    <div>
      <Link className={buttonVariants()} href="/the-basics">
        The Basic
      </Link>
    </div>
  );
}
