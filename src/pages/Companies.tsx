import { useState } from "react";
import { Table } from "@/components/organisms/Table";
import { InputText } from "@/components/atoms/InputText";
import { Select } from "@/components/atoms/Select";
import { Button } from "@/components/atoms/Button";
import { Pen } from "@/icons";
import { SearchIcon } from "@primer/octicons-react";
import { companiesData, companiesColumns } from "@/mock/companies";

const Companies = () => {
    const [query, setQuery] = useState("");

    const filteredData = companiesData.filter((c) => {
        const haystack = `${c.id} ${c.name} ${c.ville} ${c.siret} ${c.postal_code} ${c.status}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
    });

    return (
        <div className="p-8 h-full flex flex-col gap-4 bg-base-bg-color-regular">
            <div className="flex flex-row gap-1" id="filters">
                <InputText
                    placeholder="Rechercher"
                    size="md"
                    length="md"
                    IconHeading={SearchIcon}
                    shortcut="Ctrl + K"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Select size="md" placeholder="Choisir" options={[{ label: "Tous", value: "all" }]} />
                <Button label="Modifier" type="secondary" Icon={Pen} size="md" />
            </div>
            <div>
                <Table data={filteredData} columns={companiesColumns} />
            </div>
        </div>
    );
};

export default Companies;




