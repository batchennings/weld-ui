import React, { useMemo, useState } from "react";
import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, createColumnHelper } from '@tanstack/react-table'
import { CompanyRow } from "./types";
import { TableHeaderCell, TableBodyCell } from "@/components/organisms/TableCell"
import { Button } from "@/components/atoms/Button"
import { Select } from "@/components/atoms/Select"
import { ChevronLeft, ChevronRight } from "@/icons"
import { TableRow } from "@/components/organisms/TableRow";

interface TableProps {
    data: CompanyRow[];
    columns: any[];
    actions?: any[];
    onRowClick?: (row: CompanyRow) => void;
}

export const Table = ({ columns, data, actions, onRowClick }: TableProps) => {
    const [pageSize, setPageSize] = useState(25);
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 25,
    });

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        state: {
            sorting,
            pagination,
        },
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 25,
            },
        },
    });

    const PaginationComponent = () => {
        const pageSizeOptions = [
            { value: "25", details: "25 items per page" },
            { value: "50", details: "50 items per page" },
            { value: "100", details: "100 items per page" }
        ];

        const handlePageSizeChange = (newPageSize: string) => {
            const size = parseInt(newPageSize);
            setPageSize(size);
            setPagination(prev => ({ ...prev, pageSize: size, pageIndex: 0 }));
        };

        return (
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700">Rows per page:</span>
                        <Select
                            content=""
                            placeholder={`${pageSize} items`}
                            options={pageSizeOptions}
                            size="sm"
                            value={pageSize.toString()}
                            onValueChange={handlePageSizeChange}
                        />
                    </div>
                    <div className="text-sm text-gray-700">
                        Showing {pagination.pageIndex * pagination.pageSize + 1} to{' '}
                        {Math.min(
                            (pagination.pageIndex + 1) * pagination.pageSize,
                            table.getFilteredRowModel().rows.length
                        )}{' '}
                        of {table.getFilteredRowModel().rows.length} results
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        type="secondary"
                        size="sm"
                        Icon={ChevronLeft}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    />
                    <span className="text-sm text-gray-700">
                        Page {pagination.pageIndex + 1} of {table.getPageCount()}
                    </span>
                    <Button
                        type="secondary"
                        size="sm"
                        Icon={ChevronRight}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="table-container">
            <table className="table-auto w-full">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            <TableHeaderCell
                                dataType="checkbox"
                            />
                            {headerGroup.headers.map(header => (
                                <TableHeaderCell
                                    key={header.id}
                                    content={header.column.columnDef.hasHeaderLabel ? flexRender(header.column.columnDef.header, header.getContext()) : null}
                                    canSort={header.column.columnDef.hasHeaderLabel ? header.column.getCanSort() : null}
                                    isSorted={header.column.columnDef.hasHeaderLabel ? header.column.getIsSorted() : null}
                                    onSort={header.column.getToggleSortingHandler()}
                                />
                            ))}
                            <TableHeaderCell
                                content=""
                            />
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow onRowClick={onRowClick} id={row.id} original={row.original}>
                            <TableBodyCell
                                dataType="checkbox"
                            />
                            {row.getVisibleCells().map(cell => {
                                const dataType = (cell.column.columnDef as any).dataType;
                                const content = dataType === "pill" ? cell.getValue() : flexRender(cell.column.columnDef.cell, cell.getContext());
                                return (
                                    <TableBodyCell
                                        key={cell.id}
                                        content={content}
                                        dataType={dataType}
                                        priority={(cell.column.columnDef as any).priority}
                                        isSorted={cell.column.getIsSorted()}
                                        canSort={cell.column.getCanSort()}
                                    />
                                );
                            })}
                            <TableBodyCell
                                dataType="action"
                                actions={actions}
                                rowData={row.original}
                            />
                        </TableRow>
                    ))}
                </tbody>
            </table>
            <PaginationComponent />
        </div>
    );
};
