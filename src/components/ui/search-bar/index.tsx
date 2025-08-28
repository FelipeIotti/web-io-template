"use client";

import { debounce } from "@/shared/utils/debounce";
import { useTranslations } from "next-intl";
import { ChangeEvent, useCallback, useState } from "react";
import { Icon } from "../icon";

interface SearchBarProps {
  handleSearch?: (searchTerm: string) => void;
  className?: string;

  placeholder?: string;
}

export function SearchBar({
  handleSearch,
  className,
  placeholder = "search",
}: SearchBarProps) {
  const t = useTranslations();

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedFetchData = useCallback(
    debounce((value: string) => {
      handleSearch?.(value);
    }, 100),
    [handleSearch]
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    debouncedFetchData(inputValue);
  }

  return (
    <div className="group relative items-center">
      <div className="absolute top-1/2 left-3 -translate-y-1/2 transform">
        <Icon
          name="Search"
          size={10}
          className="group-hover:fill-text fill-black/40 transition-colors duration-200"
        />
      </div>
      <input
        placeholder={placeholder ? t(placeholder) : ""}
        className={`w-auto rounded py-1.5 pl-8 shadow transition-all duration-200 ${className}`}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
