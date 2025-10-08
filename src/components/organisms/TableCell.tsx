import { IconProps } from "@primer/octicons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Pill } from "../atoms/Pill";
import { Dropdown } from "../atoms/Dropdown";
import { Button } from "../atoms/Button";
import { DotsH, Plus, ChevronUp, ChevronDown } from "@/icons";
import { CheckboxGroup } from "../atoms/CheckboxGroup";

export const TableHeaderCell = ({ content, canSort, isSorted, onSort, ...rest }: any) => {
    const getSortIcon = () => {
        if (!canSort) return null;
        if (isSorted === 'asc') return <ChevronUp size={16} className="text-base-icon-color-secondary" />;
        if (isSorted === 'desc') return <ChevronDown size={16} className="text-base-icon-color-secondary" />;
        return <ChevronUp size={16} className="text-base-icon-color-muted opacity-50" />;
    };

    return (
        <th 
            className={`p-3 border-b-2 border-table-border-color text-table-text-color-secondary text-left ${
                canSort ? 'cursor-pointer hover:bg-base-bg-color-hover select-none' : ''
            } ${ isSorted ? 'bg-table-bg-color-highlight' : ''}`}
            onClick={canSort ? onSort : undefined}
            {...rest}
        >
            <div className="flex items-center gap-2">
                <span>{content}</span>
                {getSortIcon()}
            </div>
        </th>
    );
};

const bodyCellVariants = cva("border-b px-4 py-3 border-table-border-color", {
    variants: {
        priority: {
            primary: ["text-table-text-color-primary"],
            secondary: ["text-table-text-color-secondary"],
        },
        dataType: {
            text: "text-left",
            numeric: "text-right font-mono",
            pill: "text-left",
            action: "text-center w-fit",
            checkbox: "text-center w-fit",
        }
    },
    defaultVariants: {
        priority: "primary",
    },
});
export type TableBodyCellProps = Omit<React.HTMLAttributes<HTMLTableCellElement>, 'content'> & VariantProps<typeof bodyCellVariants> & {
    content?: any;
    priority?: string;
    dataType: "text" | "numeric" | "pill" | "action" | "checkbox";
    icon?: React.ComponentType<IconProps>;
    options?: object;
    buttonAction?: string;
    actions?: any[];
    rowData?: any;
    isSorted?: false | "asc" | "desc";
    canSort?: boolean;
}
export const TableBodyCell: React.FunctionComponent<TableBodyCellProps> = ({ content, priority, dataType, actions, rowData, icon, options, buttonAction, isSorted, canSort, ...rest }) => {
    //console.log(content.props)
    const getSortStyling = () => {
        if (!canSort) return "";
        if (isSorted === 'asc') return "bg-base-bg-color-hover";
        if (isSorted === 'desc') return "bg-base-bg-color-hover";
        return "";
    };

    return (
        <td className={`${bodyCellVariants({ priority, dataType })} ${getSortStyling()} ${ isSorted ? 'bg-table-bg-color-highlight' : ''}`} {...rest}>
            {dataType == "text" && content }
            {dataType == "numeric" && content }
            {dataType == "pill" && (() => {
                const status = String(content).toLowerCase();
                const pillType = status === "active" ? "green" : status === "inactive" ? "red" : "blue";
                const pillStyle = status === "active" ? "light" : status === "inactive" ? "light" : "light";
                return <Pill type={pillType} style={pillStyle} size="md" content={String(content)}/>;
            })()}
            {dataType == "action" && actions && (
                <Dropdown
                    triggerLabel=""
                    items={actions.map(action => ({
                        label: action.label,
                        Icon: action.Icon,
                        onSelect: () => action.onClick?.(rowData)
                    }))}
                    triggerElement={
                        <Button
                            type="ghost"
                            size="sm"
                            Icon={DotsH}
                        />
                    }
                />
            )}
            {dataType == "checkbox" && <CheckboxGroup />}
            {!dataType && content}
        </td>
    );
};
