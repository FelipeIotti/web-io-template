"use client";

import { HTMLAttributes, useRef } from "react";
import { Text } from "../../text";

interface TextCellProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string | number | null;
  className?: string;
  noTranslate?: boolean;
}

export function TextCell({
  text,
  className = "",
  noTranslate = true,
  ...rest
}: TextCellProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  const content =
    typeof text === "number"
      ? text.toLocaleString("en-US", { minimumIntegerDigits: 1 })
      : text ?? "-";

  return (
    <div className="relative w-[90%]">
      <Text
        ref={textRef}
        className={`truncate text-start ${
          !text && text !== 0 ? "ml-4" : ""
        } ${className}`}
        noTranslate={noTranslate}
        {...rest}
      >
        {content}
      </Text>
    </div>
  );
}
