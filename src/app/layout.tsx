import "@/styles/tailwind.css";
import { Inter as FontSans } from "next/font/google";

import { Provider } from "@/features/provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          <div className="container mx-auto px-10 py-8 sm:py-12 md:px-20 md:py-16 lg:py-20 xl:py-24">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
