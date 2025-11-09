import { IconProps } from "@primer/octicons-react";
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

export type TableBodyCellProps = Omit<React.HTMLAttributes<HTMLTableCellElement>, 'content'> & {
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
        <td {...rest}>
            {dataType == "text" && content }
            {dataType == "numeric" && content }
            {dataType == "button" && <Button type="secondary" label="Action" /> }
            {dataType == "pill" && (() => {
                const status = String(content).toLowerCase();
                const pillType = status === "active" ? "green" : status === "inactive" ? "red" : "blue";
                const pillStyle = status === "active" ? "light" : status === "inactive" ? "light" : "light";
                return <Pill type={pillType} style={pillStyle} size="md" content={String(content)}/>;
            })()}
            {dataType == "action" && actions && (
                <Dropdown
                    items={actions.map(action => ({
                        label: action.label,
                        Icon: action.Icon,
                        onSelect: () => action.onClick?.(rowData)
                    }))}
                    trigger={
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
