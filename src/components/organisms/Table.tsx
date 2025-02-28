import React, { useMemo } from "react";
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import { TableRow } from "./types";
import { TableHeaderCell, TableBodyCell} from "@/components/organisms/TableCell"

interface TableProps {
    data: TableRow[];
}

export const Table = ({columns, data } : Props) => {
    const table  = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel()});

    return (
        <div className="table-container">
            <table className="table-auto">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <>
                                    <TableHeaderCell key={ header.id } content={flexRender(header.column.columnDef.header, header.getContext())} />
                                </>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <>
                                    <TableBodyCell key={cell.id} content={flexRender(cell.column.columnDef.cell, cell.getContext())} priority={cell.column.columnDef.priority}/>
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
