"use client";

import { useTranslations } from "next-intl";
import { forwardRef, HTMLAttributes, useRef } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  noTranslate?: boolean;
  count?: number | string | null;
  type?: "p" | "h1" | "h2";
  noTooltip?: boolean;
}

function TextComponent(
  {
    children,
    className = "",
    noTranslate = false,
    count,
    type = "p",
    noTooltip = false,
    ...rest
  }: TextProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const t = useTranslations();
  const hasTruncate =
    className.includes("truncate") && !className.includes("whitespace-nowrap");
  const textRef = useRef<HTMLParagraphElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const Tag = type;
  const content =
    noTranslate || typeof children !== "string"
      ? children
      : t(children, { count: count! });

  function checkTruncate() {
    if (noTooltip || !hasTruncate) return;
    const el = textRef.current;
    const tooltip = tooltipRef.current;

    if (el && tooltip) {
      if (el.scrollWidth > el.clientWidth) {
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    }
  }

  return (
    <div
      className={`relative ${hasTruncate ? "group" : ""} max-w-[95%]`}
      onMouseEnter={checkTruncate}
      onMouseLeave={() => {
        if (tooltipRef.current) tooltipRef.current.style.display = "none";
      }}
    >
      <Tag
        ref={(node) => {
          textRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={className}
        {...rest}
      >
        {content}
      </Tag>
      <div
        ref={tooltipRef}
        style={{ display: "none" }}
        className="absolute bottom-6 left-0 z-50 rounded border bg-white px-3 py-2 text-xs whitespace-nowrap shadow-sm"
      >
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
}

export const Text = forwardRef(TextComponent);
