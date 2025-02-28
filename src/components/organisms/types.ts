export interface TabsItem{
    label: string;
    icon: string;
    promoted: boolean;
    active: boolean;
}
export interface TableRow {
    id: string;
    productName: string;
    type: "socle" | "option";
    productCode: string;
    guarantee: string;
    guaranteeCode: string;
    guaranteePack: string;
    risk: string;
    priority: number;
    effectiveDate: string;
    status: Status;
}
