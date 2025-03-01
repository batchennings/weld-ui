import { Button } from "@/components/atoms/Button"
import { Alert } from "@/components/atoms/Alert"
import { Pill } from "@/components/atoms/Pill"
import { Table } from "@/components/organisms/Table";

import { Pen, Plus, PlusCircle, Trash, Info } from "@/icons"
import { CheckIcon, InfoIcon, AlertIcon, DotFillIcon, SearchIcon, XIcon } from '@primer/octicons-react'
import Dropdown from "@/components/atoms/Dropdown";

// mock data
import { tableData, tableColumns } from "@/mock/table"
import { selectData } from "@/mock/select"
import { InputText } from "@/components/atoms/InputText";
import { Component } from "@/components/atoms/Component";
import { Select } from "@/components/atoms/Select";

const Index = () => {
    function clickButton() {
        console.log("Button clicked");
    }
    return (
        <div className="m-8 flex flex-col gap-4">
            <Component Icon={InfoIcon} content="Template component" type="main" />
            <div className="flex flex-row w-fit flex-wrap gap-4">
                <Button label="Bouton simple" type="primary" size="md" onClick={clickButton} />
                <Button label="Ajouter un membre" type="primary" Icon={Plus} size="sm" />
                <Button label="Modifier" type="secondary" Icon={Pen} size="sm" />
                <Button label="Ajouter un membre" type="primary" Icon={Plus} size="md" />
                <Button label="Modifier" type="secondary" Icon={Pen} size="md" />
                <Button label="Supprimer" type="destructive" Icon={Trash} size="md" />
                <Button label="Ajouter un membre" type="primary" Icon={Plus} size="lg" />
            </div>
            <div>
                <Alert content="Ce message a de l'importance" variant="warning" title="Titre" action="Voir la page" Icon={InfoIcon} />
            </div>
            <div className="flex flex-row gap-4">
                <Pill type="red" style="filled" content="Label" Icon={AlertIcon} />
                <Pill type="red" style="light" content="Label" Icon={AlertIcon} />
                <Pill type="red" style="stroke" content="Label" Icon={AlertIcon} />
                <Pill type="blue" style="light" content="Label" size="sm" Icon={DotFillIcon} />
            </div>
            <div className="flex flex-row gap-4">
                <InputText placeholder="Rechercher" size={24} IconHeading={SearchIcon} shortcut="Ctrl + K" />
            </div>
            <Select size="md" placeholder="Choisir" options={selectData}/>

            <div className="">
                <Table data={tableData} columns={tableColumns} />
            </div>
        </div>
    );
};

export default Index;
