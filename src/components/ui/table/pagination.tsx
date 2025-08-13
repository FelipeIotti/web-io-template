import { useEffect, useState } from "react";
import { IconButton } from "../icon-button";

interface PaginationProps {
  itemsQuantity?: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

export function Pagination({
  itemsQuantity = 0,
  itemsPerPage,
  onPageChange,
  isLoading = false,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(itemsQuantity / itemsPerPage);
  const isDisabled = itemsQuantity === 0 || isLoading;

  useEffect(() => {
    if (itemsQuantity > 0) {
      setCurrentPage(1);
    }
  }, [itemsQuantity]);

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage);
    onPageChange(newPage);
  }

  function handleNext() {
    if (!isDisabled && currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  }

  function handlePrev() {
    if (!isDisabled && currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-row items-end gap-2">
        <p>
          {isDisabled ? "0" : String((currentPage - 1) * itemsPerPage + 1)}
          {" - "}
          {isDisabled
            ? "0"
            : String(Math.min(currentPage * itemsPerPage, itemsQuantity))}
          {" de "}
          {String(isDisabled ? "0" : itemsQuantity)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <IconButton
          disabled={isDisabled || currentPage === 1}
          onClick={handlePrev}
          iconName="ChevronLeft"
        />

        <IconButton
          disabled={isDisabled || currentPage === totalPages}
          onClick={handleNext}
          iconName="ChevronRight"
        />
      </div>
    </div>
  );
}
