"use client";

import Link from "next/link";
import * as React from "react";
import { siteConfig } from "@/configs/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const Heeader = React.forwardRef<
  React.ElementRef<"header">,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b" ref={ref} {...props}>
      <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0 backdrop-blur bg-background/60">
        <Link href="/">
          <Icons.logo className="h-12" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.menus.map((menu) => (
            <Link key={menu.url} href={menu.url}>
              {menu.name}
            </Link>
          ))}
        </nav>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="md:hidden">
            <Icons.menu className="h-8" />
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4">
              {siteConfig.menus.map((menu) => (
                <Link
                  key={menu.url}
                  href={menu.url}
                  onClick={() => setSheetOpen(false)}
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
});

Heeader.displayName = "Heeader";

export { Heeader };
