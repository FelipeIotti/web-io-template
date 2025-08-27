import React from "react";

const TableComponent = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, style, ...props }, ref) => (
  <div className="scrollbar scrollbar-thumb-background scrollbar-track-foreground relative w-full border-collapse overflow-auto">
    <table
      ref={ref}
      className={`min-h-[250px] w-full caption-bottom text-sm ${className}`}
      style={style}
      {...props}
    />
  </div>
));
TableComponent.displayName = "TableComponent";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <thead
    ref={ref}
    className={`bg-border rounded font-bold text-black ${className}`}
    style={style}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <th ref={ref} className={` ${className}`} style={style} {...props} />
));
TableHead.displayName = "TableHead";

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
    className={`border-b-border hover:bg-background/45 border-b text-black [&:last-child]:border-b-0 ${className}`}
    style={style}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <td
    ref={ref}
    className={`py-2 text-center ${className}`}
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
