"use client";

import React, { CSSProperties, ReactElement, useMemo, useState } from "react";

import { Text } from "@/components/ui/text";
import { SearchBar } from "../search-bar";
import { Pagination } from "./pagination";
import { SkeletonTable } from "./skeleton-table";
import {
  TableBody,
  TableCell,
  TableComponent,
  TableHead,
  TableHeader,
  TableRow,
} from "./table-components";

export interface ColumnConfig<T> {
  key?: keyof T | string;
  name: React.ReactNode;
  noTranslateColumn?: boolean;
  render: (entity: T, index: number) => React.ReactNode;
  rowStyle?: CSSProperties;
  columnStyle?: CSSProperties;
  searchValue?: (item: T) => string;
}

interface TableProps<T> {
  data?: T[];
  columns: ColumnConfig<T>[];
  //filtersTable?: FilterTypesDTO;
  // exportData?: ({ data,  }: ExportDataDTO) => {
  //   data: { [key: string]: string }[];
  //   columns: Column[];
  //   title: string;
  // };
  itemsPerPage?: number;
  isLoading?: boolean;
  CustomFilter?: ReactElement;
  CustomLeftComponents?: ReactElement;
  noPagination?: boolean;
}

export function Table<T>({
  data,
  columns,
  //filtersTable,
  itemsPerPage = 10,
  //exportData,
  isLoading = false,
  CustomFilter,
  CustomLeftComponents,
  noPagination = false,
}: TableProps<T>) {
  // const { filtersSelected } = useFilter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!data) return undefined;

    return data.filter((item) =>
      columns.some((column) => {
        if (column.searchValue) {
          return column
            .searchValue(item)
            ?.toLowerCase()
            ?.includes(searchTerm?.toLowerCase());
        }

        const raw = item[column.key as keyof T];
        return raw
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchTerm?.toLowerCase());
      })
    );
  }, [data, columns, searchTerm]);

  const paginatedData = useMemo(() => {
    if (!filteredData) return undefined;
    return filteredData.slice(
      (currentPage - 1) * (noPagination ? 999 : itemsPerPage),
      currentPage * (noPagination ? 999 : itemsPerPage)
    );
  }, [filteredData, currentPage, itemsPerPage, noPagination]);

  async function handleChangePage(page: number) {
    setCurrentPage(page);
  }

  function handleSearch(term: string) {
    setSearchTerm(term);
    setCurrentPage(1);
  }

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <div className="flex flex-row items-end gap-2">
          {CustomFilter && CustomFilter}

          {CustomLeftComponents && CustomLeftComponents}

          {/* {filtersTable && <Filter />} */}
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <SearchBar handleSearch={handleSearch} />
          <Pagination
            itemsQuantity={filteredData?.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => handleChangePage(page)}
            isLoading={isLoading}
          />
          {/* {data && exportData && (
            <div
              ref={exportRef}
              className={`flex relative rounded-full bg-black/10 ${
                data.length > 0 && "cursor-pointer"
              }`}
              onClick={() => data.length > 0 && setShowExport(!showExport)}
            >
              <Icon name="ThreeDots" size={28} className="hover:fill-secondary" />

              {showExport && filteredData && (
                <ExportSection
                  data={filteredData}
                  setShowExport={setShowExport}
                  showExport={showExport}
                  exportData={exportData}
                  filtersSelected={filtersSelected}
                  exportRef={exportRef}
                />
              )}
            </div>
          )} */}
        </div>
      </div>

      {/* {filtersTable && <FilterTypes filtersTable={filtersTable} />} */}

      <TableComponent>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {columns.map((column) => (
              <TableHead key={String(column.key)} style={column.columnStyle}>
                <Text noTranslate={column.noTranslateColumn}>
                  {column.name && (column.name as string)}
                </Text>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <SkeletonTable row={itemsPerPage} />
          ) : (
            data &&
            paginatedData &&
            paginatedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)} style={column.rowStyle}>
                    {column.render(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
        {paginatedData && paginatedData.length === 0 && (
          <div className="absolute  top-15 flex h-full w-full items-center justify-center">
            <Text className="text-center opacity-50">no_data_found</Text>
          </div>
        )}
      </TableComponent>
    </div>
  );
}
