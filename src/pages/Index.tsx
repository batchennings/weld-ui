import { Button } from "@/components/atoms/Button"
import { Alert } from "@/components/atoms/Alert"
import { Pill } from "@/components/atoms/Pill"
import { Table } from "@/components/organisms/Table";

import { Pen, Plus, Trash } from "@/icons"
import { InfoIcon, AlertIcon, DotFillIcon, SearchIcon } from '@primer/octicons-react'

// mock data
import { tableData, tableColumns } from "@/mock/table"
import { selectData } from "@/mock/select"
import { InputText } from "@/components/atoms/InputText";
import { Component } from "@/components/atoms/Component";
import { Select } from "@/components/atoms/Select";
import { Switch } from "@/components/atoms/Switch";
import { useState } from "react";

const Index = () => {
    const [darkMode, setDarkMode] = useState(false)
    function changeSwitchState(darkState: boolean) {
        setDarkMode(darkState)
    }
    function clickButton() {
        console.log("Button clicked");
    }
    return (
        <div className={"p-8 h-full flex flex-col gap-4 bg-base-bg-color-regular transition " + (darkMode ? "dark" : "")}>
            <Switch id="darkSelector" label="Dark mode" description="Modifier le thème de l'interface" onCheckedChange={changeSwitchState} />
            <Component Icon={InfoIcon} content="Template component" type="main" />
            <div className="flex flex-row w-fit flex-wrap gap-2">
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
            <div className="flex flex-row gap-2">
                <Pill type="red" style="filled" content="Label" Icon={AlertIcon} />
                <Pill type="red" style="light" content="Label" Icon={AlertIcon} />
                <Pill type="red" style="stroke" content="Label" Icon={AlertIcon} />
                <Pill type="blue" style="light" content="Label" size="sm" Icon={DotFillIcon} />
            </div>
            <div className="flex flex-row gap-4">
                <InputText placeholder="Rechercher" size="md" length="full" IconHeading={SearchIcon} shortcut="Ctrl + K" />
            </div>
            <div className="flex flex-row gap-2">
                <InputText
                    placeholder=""
                    size="md"
                    length="md"
                    label="Numéro de dossier"
                    description="Si vous avez oublié ce numéro, vous pouvez le retrouver sur la fiche envoyée lors de votre inscription"
                    id="myInput"/>
                <InputText
                    placeholder=""
                    size="md"
                    length="md"
                    label="Numéro de dossier"
                    disabled
                    description="Si vous avez oublié ce numéro, vous pouvez le retrouver sur la fiche envoyée lors de votre inscription"
                    id="myInput2"
                    value="983312944"/>
            </div>

            <div className="flex flex-row gap-1">
                <InputText placeholder="Rechercher" size="md" length="md" IconHeading={SearchIcon} shortcut="Ctrl + K" />
                <Select size="md" placeholder="Choisir" options={selectData} />
                <Button label="Modifier" type="secondary" Icon={Pen} size="md" />
            </div>
            <div className="">
                <Table data={tableData} columns={tableColumns} />
            </div>
        </div>
    );
};

export default Index;
