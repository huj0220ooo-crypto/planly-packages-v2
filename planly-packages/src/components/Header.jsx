import React, { useState } from "react";
import { Logo, Moon, Menu, Arrow } from "./icons";

export default function Header() {
  const [night, setNight] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e6f2] bg-[#f4f7fd]/90 backdrop-blur">
      <div className="flex h-[88px] items-center justify-between px-5 sm:h-[120px] sm:px-9">
        <a href="#" className="inline-flex items-center gap-3 sm:gap-5">
          <Logo className="h-[26px] w-[26px] text-[#6f9be8] sm:h-[34px] sm:w-[34px]" />
          <span className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#2b2757] sm:text-[44px]">
            Planly<span className="text-[#a78be8]">.</span>
          </span>
        </a>

        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setNight((n) => !n)}
            aria-pressed={night}
            className="hidden items-center gap-3 text-[18px] text-[#6b7694] sm:inline-flex"
          >
            <Moon className="h-[22px] w-[22px]" />
            Night
          </button>

          <a
            href="#signin"
            className="inline-flex h-[54px] items-center gap-3.5 rounded-xl border border-[#d6dcea] bg-white px-5 text-[18px] font-medium text-[#2b2757] transition hover:bg-[#f4f6fc] sm:ml-[21px]"
          >
            Sign in
            <Arrow className="h-5 w-5" />
          </a>

          <button type="button" aria-label="Open menu" className="ml-[25px] text-[#5f6b80]">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
