import {
  forwardRef,
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

const TableComponent = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, style, ...props }, ref) => (
  <div className=" overflow-hidden rounded border shadow">
    <div className="scrollbar-thin scrollbar-thumb-black/10 scrollbar-track-white  h-full min-h-[145px] overflow-auto">
      <table
        ref={ref}
        className={` relative min-w-full text-sm ${className}`}
        style={style}
        {...props}
      />
    </div>
  </div>
));
TableComponent.displayName = "TableComponent";

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <thead
    ref={ref}
    className={`bg-border font-bold text-black ${className}`}
    style={style}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <th
    ref={ref}
    className={`p-2 text-start whitespace-nowrap ${className}`}
    style={style}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, style, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`min-h-full ${className}`}
    style={style}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, style, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b-border border-b-[1px] text-black hover:bg-black/3 ${className}`}
    style={style}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, style, ...props }, ref) => (
  <td
    ref={ref}
    className={`p-2 text-start whitespace-nowrap [&:first-child]:max-w-4 [&:last-child]:max-w-4 ${className}`}
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
