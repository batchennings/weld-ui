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
                            <TableHeaderCell
                                dataType="checkbox"
                            />
                            {headerGroup.headers.map(header => (
                                <TableHeaderCell
                                    key={ header.id }
                                    content={flexRender(header.column.columnDef.header, header.getContext())}
                                />
                            ))}
                            <TableHeaderCell
                                dataType="ation"
                            />
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            <TableBodyCell
                                dataType="checkbox"
                                />
                            {row.getVisibleCells().map(cell => (
                                <TableBodyCell
                                    key={cell.id}
                                    content={flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    dataType={cell.column.columnDef.dataType}
                                    priority={cell.column.columnDef.priority}/>
                            ))}
                            <TableBodyCell
                                dataType="action"
                                />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
