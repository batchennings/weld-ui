import { cva, type VariantProps } from "class-variance-authority";

export const TableHeaderCell = ({ content, ...rest }: Props) => {
    return (
        <th className="p-3 border-b text-gray-500 text-left">{content}</th>
    );
};

const bodyCell = cva("border-b p-4", {
    variants: {
        priority: {
            secondary: ["text-gray-500"],
            primary: ["text-gray-900"],
        },
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
export const TableBodyCell: React.FunctionComponent<T> = ({ content, priority, ...rest }: Props) => {
    console.log(content.props)
    return (
        <td className={bodyCell({ priority })} >{content}</td>
    );
};
