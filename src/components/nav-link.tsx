"use client";
import Link from "next/link";
import { NavLink } from "@/ui/styled-components";
import { usePathname } from "next/navigation";

export default function AppNavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const pathName = usePathname();
  return (
    <NavLink
      variant={"text"}
      color="inherit"
      LinkComponent={Link}
      href={href}
      className={pathName === href ? "active" : null}
    >
      {text}
    </NavLink>
  );
}
