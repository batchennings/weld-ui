import { TabsItem } from "./types";
import {Tab} from "@/components/atoms/Tab"

interface TabsProps {
  items: TabsItem;
}

export const Tabs = ({ items }: TabsProps) => {
    return (
        <div className="flex flex-row">
            {items.map((item, index) => (
                <Tab key={index} className="">{ item.label }</Tab>
            ))}
        </div>
    );
};
