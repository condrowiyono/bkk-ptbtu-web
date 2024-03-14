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
    <header
      className="sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur"
      ref={ref}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <Link
          href="/"
          aria-label="PT Baja Titian Utama"
          aria-describedby="main-heading"
        >
          <Icons.logo className="h-12" />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.menus.map((menu) => (
            <Link
              key={menu.url}
              href={menu.url}
              className={cn({
                "text-primary": menu.text === "primary",
                "font-bold": menu.text === "primary",
              })}
            >
              {menu.name}
              {menu.external && <Icons.externalLink className="inline h-4" />}
            </Link>
          ))}
        </nav>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="md:hidden" aria-label="Expand Menu">
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
