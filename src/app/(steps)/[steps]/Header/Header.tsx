import React from "react";
import IconLogo from "../../../../components/ui/Logo/IconLogo";
import Link from "next/link";
import { PAGE_ROUTES } from "@/constants/routes";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="px-4 lg:px-8 py-[10.5px] border-b border-neutral-6 flex items-center justify-between">
      <Link href={PAGE_ROUTES.HOME}>
        <IconLogo className="w-[28px] h-[28px] fill-black" />
      </Link>

      <HamburgerMenu />
    </header>
  );
}
