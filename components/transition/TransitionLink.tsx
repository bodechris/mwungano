"use client";

import Link, { type LinkProps } from "next/link";
import React from "react";
import { formatUrl } from "next/dist/shared/lib/router/utils/format-url";
import { usePageTransition } from "./PageTransitionProvider";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  LinkProps & {
    children: React.ReactNode;
  };

function hrefToString(href: LinkProps["href"]) {
  return typeof href === "string" ? href : formatUrl(href);
}

export default function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const { navigate, isTransitioning } = usePageTransition();

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // allow new tab, cmd/ctrl click, etc.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") return;

    e.preventDefault();
    navigate(hrefToString(href));
  };

  return (
    <Link href={href} onClick={handleClick} aria-disabled={isTransitioning} {...rest}>
      {children}
    </Link>
  );
}