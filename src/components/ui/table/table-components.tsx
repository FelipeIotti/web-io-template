import React from "react";

const TableComponent = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, style, ...props }, ref) => (
  <div className="relative w-full overflow-hidden rounded border shadow-md">
    <div className="scrollbar scrollbar-thumb-background scrollbar-track-foreground relative w-full overflow-auto">
      <table
        ref={ref}
        className={`min-h-[250px] w-full min-w-[800px] caption-bottom rounded text-sm ${className}`}
        style={style}
        {...props}
      />
    </div>
  </div>
));
TableComponent.displayName = "TableComponent";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <thead
    ref={ref}
    className={`bg-background border-b-border w-full border-b-1 font-bold text-black ${className}`}
    style={style}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`border-0 ${className}`}
    style={style}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, style, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b-border hover:bg-background/45 flex border-b text-black [&:last-child]:border-b-0 ${className}`}
    style={style}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <th
    ref={ref}
    className={`mx-2 flex h-8 w-full min-w-8 items-center justify-start pl-1  ${className}`}
    style={style}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <td
    ref={ref}
    className={`mx-2 flex w-full min-w-8 flex-col items-start justify-center gap-1 py-2 pl-1 text-center ${className}`}
    style={style}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export {
  TableBody,
  TableCell,
  TableComponent,
  TableHead,
  TableHeader,
  TableRow,
};
