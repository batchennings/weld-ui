import { Button } from "@/components/atoms/Button"
import { Alert } from "@/components/atoms/Alert"
import { Pill } from "@/components/atoms/Pill"
import { Table } from "@/components/organisms/Table";

import { Pen, Plus, PlusCircle, Trash, Info } from "@/icons"
import {CheckIcon, InfoIcon, AlertIcon, DotFillIcon} from '@primer/octicons-react'

const tabs = [
    {
        label: "Souscriptions",
        icon: "",
        promoted: true,
        active: true
    },
    {
        label: "Demandes",
        icon: "",
        promoted: true,
        active: false
    },
    {
        label: "Personnes affiliées",
        icon: "",
        promoted: true,
        active: false
    },
    {
        label: "Échéanciers'",
        icon: "",
        promoted: false,
        active: false
    },
]

const tableData = [
    {
        "id": 1,
        "first_name": "Alysia",
        "last_name": "Ivashechkin",
        "email": "aivashechkin0@example.com",
        "phone": "(424) 8787997",
        "image": "https://picsum.photos/400",
        "state": "California",
        "city": "Los Angeles",
        "address": "2 Vermont Junction"
    },
    {
        "id": 2,
        "first_name": "Alicia",
        "last_name": "Sworder",
        "email": "asworder1@mozilla.com",
        "phone": "(804) 8988278",
        "image": "https://picsum.photos/400",
        "state": "Virginia",
        "city": "Richmond",
        "address": "362 Hoffman Court"
    }
]
const tableColumns = [
    {
        header: "ID",
        priority: "secondary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "id"
    },
    {
        header: "First Name",
        priority: "primary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "first_name"
    },
    {
        header: "Last Name",
        priority: "primary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "last_name"
    },
    {
        header: "Email",
        priority: "secondary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "email"
    },
    {
        header: "Phone",
        priority: "primary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "phone"
    },
    {
        header: "State",
        priority: "secondary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "state"
    },
    {
        header: "City",
        priority: "secondary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "city"
    },
    {
        header: "Address",
        priority: "secondary",
        dataType: "string",
        hasHeaderLabel: true,
        accessorKey: "address"
    }
]


const Index = () => {
    function clickButton() {
        alert("Button clicked");
    }
    return (
        <div className="m-8 flex flex-col gap-4">
            <div className="flex flex-row w-fit flex-wrap gap-4">
                <Button label="Bouton simple" type="primary" size="md" onClick={clickButton} />
                <Button label="Ajouter un membre" type="primary" icon={<Plus size={16} />} size="sm" />
                <Button label="Modifier" type="secondary" icon={<Pen size={16} />} size="sm" />
                <Button label="Ajouter un membre" type="primary" icon={<Plus size={20} />} size="md" />
                <Button label="Modifier" type="secondary" icon={<Pen size={20} />} size="md" />
                <Button label="Supprimer" type="destructive" icon={<Trash size={20} />} size="md" />
                <Button label="Ajouter un membre" type="primary" icon={<Plus size={20} />} size="lg" />
                <Button label="Modifier" type="secondary" icon={<Pen size={20} />} size="lg" />
                <Button label="Ajouter un membre" type="primary" icon={<Plus size={20} />} size="md" disabled />
                <Button label="Modifier" type="secondary" icon={<Pen size={20} />} size="md" disabled />
                <Button label="Bouton fantôme" type="ghost" size="md" />
                <Button label="Bouton fantôme" type="ghost" size="md" icon={<Plus size={20} />} />
                <Button label="Lien simple" type="link" size="md" />
                <Button label="Lien simple" type="link" size="md" icon={<PlusCircle />} />
            </div>
            <div>
                <Alert content="Ce message a de l'importance" variant="warning" title="Titre" action="Voir la page" Icon={InfoIcon}/>
            </div>
            <div className="flex flex-row gap-4">
                <Pill type="red" style="filled" content="Label" Icon={AlertIcon}/>
                <Pill type="red" style="light" content="Label" Icon={AlertIcon}/>
                <Pill type="red" style="stroke" content="Label" Icon={AlertIcon}/>
                <Pill type="blue" style="light" content="Label" size="sm" Icon={DotFillIcon}/>
            </div>
            <div className="">
                <Table data={tableData} columns={tableColumns} />
            </div>
        </div>
    );
};

export default Index;
