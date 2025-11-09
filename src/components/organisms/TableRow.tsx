

export type TableBodyCellProps = Omit<React.HTMLAttributes<HTMLTableRowElement>, 'content'> & {
    content?: any;
    isSelectable?: string;
    options?: object;
}
export const TableRow = ({ children, id, original, onRowClick, content, ...rest }: any) => {
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
