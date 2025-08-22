"use client";

import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { Text } from "../../text";

interface TextCellProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string | number | null;
  className?: string;
  detailsComponent?: (
    show: boolean,
    setShow: (show: boolean) => void
  ) => ReactNode;
  noTranslate?: boolean;
}

export function TextCell({
  text,
  className = "",
  detailsComponent,
  noTranslate = true,
  ...rest
}: TextCellProps) {
  const [showModal, setShowModal] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const content =
    typeof text === "number"
      ? text.toLocaleString("en-US", { minimumIntegerDigits: 1 })
      : text ?? "-";

  return (
    <div className="relative w-[90%]">
      <Text
        ref={textRef}
        className={`text-start ${
          !text && text !== 0 ? "ml-4" : ""
        } ${className}`}
        onClick={() => setShowModal(true)}
        noTranslate={noTranslate}
        {...rest}
      >
        {content}
      </Text>

      {detailsComponent && detailsComponent(showModal, setShowModal)}
    </div>
  );
}
