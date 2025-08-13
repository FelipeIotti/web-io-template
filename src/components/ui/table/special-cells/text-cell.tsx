"use client";

import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";

interface TextCellProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string | number | null;

  className?: string;
  detailsComponent?: (
    show: boolean,
    setShow: (show: boolean) => void
  ) => ReactNode;
  bold?: boolean;
}

export function TextCell({
  text,
  className = "",
  detailsComponent,
  ...rest
}: TextCellProps) {
  const [showModal, setShowModal] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showToolTip, setShowTooltip] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollWidth > el.clientWidth);
    }
  }, [text]);

  const content =
    typeof text === "number"
      ? text.toLocaleString("en-US", { minimumIntegerDigits: 1 })
      : text ?? "-";

  return (
    <div
      className="relative w-[90%]"
      onMouseEnter={() => isTruncated && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <p
        ref={textRef}
        className={`truncate text-start ${!text && text !== 0 ? "ml-4" : ""} ${
          isTruncated ? "cursor-pointer" : ""
        } ${className}`}
        onClick={() => setShowModal(true)}
        {...rest}
      >
        {content}
      </p>

      {detailsComponent && detailsComponent(showModal, setShowModal)}

      {showToolTip && (
        <div className="text-primary absolute bottom-8 left-0  z-1000 rounded-lg border border-red-500 bg-white px-3 py-2 shadow-lg ">
          <p className="text-nowrap">{content}</p>
        </div>
      )}
    </div>
  );
}
