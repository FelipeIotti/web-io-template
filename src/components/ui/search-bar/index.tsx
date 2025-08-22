"use client";

import { debounce } from "@/shared/utils/debounce";
import { useTranslations } from "next-intl";
import { ChangeEvent, useCallback, useState } from "react";
import { Icon } from "../icon";

interface SearchBarProps {
  handleSearch?: (searchTerm: string) => void;
  className?: string;
  value?: string;
  placeholder?: string;
}

export function SearchBar({
  handleSearch,
  className,
  value,
  placeholder = "search",
}: SearchBarProps) {
  const t = useTranslations();
  // const { handleSearchFilter, searchTerm, setSearchTerm } = useFilter();
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchFilter(term: string) {
    setSearchTerm(term.toLowerCase());
  }

  const debouncedFetchData = useCallback(
    debounce(handleSearch ?? handleSearchFilter, 100),
    [searchTerm]
  );

  const isControlled = value !== undefined;

  const inputValue = isControlled ? value : searchTerm;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputVal = event.target.value.toLowerCase();

    if (isControlled) {
      handleSearch && handleSearch(inputVal);
    } else {
      //setSearchTerm(inputVal);
      debouncedFetchData(inputVal);
    }
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
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
