import React from 'react';

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
    children?: React.ReactNode;
    id?: string;
    original?: unknown;
    onRowClick?: (data: unknown) => void;
}
export const TableRow = ({ children, id, original, onRowClick, ...rest }: TableRowProps) => {
    return (

        <tr
            key={id}
            onClick={() => onRowClick?.(original)}
            className={onRowClick ? "bg-table-bg-color cursor-pointer transition hover:bg-table-bg-color-hover" : ""}
        >
            {children}
        </tr>
    );
};
