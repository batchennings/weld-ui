import { IconProps } from "@primer/octicons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Pill } from "../atoms/Pill";

export const TableHeaderCell = ({ content, ...rest }: Props) => {
    return (
        <th className="p-3 border-b-2 border-table-border-color text-table-text-color-secondary text-left">{content}</th>
    );
};

const bodyCellVariants = cva("border-b p-4 border-table-border-color", {
    variants: {
        priority: {
            primary: ["text-table-text-color-primary"],
            secondary: ["text-table-text-color-secondary"],
        },
        dataType: {
            text: "text-left",
            numeric: "text-right font-mono",
        }
    },
    compoundVariants: [
        {
            intent: "primary",
            disabled: false,
            class: "hover:bg-blue-700",
        },
        {
            intent: "secondary",
            disabled: false,
            class: "hover:bg-gray-100",
        },
        { intent: "primary", size: "medium" },
    ],
    defaultVariants: {
        type: "primary",
    },
});
export type TableBodyCellProps = React.HTMLAttributes<HTMLTableCellElement> & VariantProps<typeof bodyCellVariants> & {
    content?: string;
    priority?: string;
    dataType: "text" | "numeric" | "pill" | "action" | "checkbox";
    icon?: React.ComponentType<IconProps>;
    options?: object;
    buttonAction?: string;

}
export const TableBodyCell: React.FunctionComponent<TableBodyCellProps> = ({ content, priority, dataType, ...rest }) => {
    //console.log(content.props)
    return (
        <td className={bodyCellVariants({ priority, dataType })} >
            {dataType == "text" && content }
            {dataType == "numeric" && content }
            {dataType == "pill" && <Pill type="green" style="light" content={content}/>}
        </td>
    );
};
