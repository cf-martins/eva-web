"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { availableLanguageTags, languageTag } from "@/paraglide/runtime";
import { Check, Globe } from "lucide-react";

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLanguageTags.map((tag) => (
          <DropdownMenuItem
            key={tag}
            onClick={() => router.push(pathname, { locale: tag })}
            className="capitalize"
          >
            <Check
              className={cn("invisible", tag === languageTag() && "visible")}
            />
            {new Intl.DisplayNames(tag, { type: "language" }).of(tag)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
