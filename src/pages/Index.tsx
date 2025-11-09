import { Button } from "@/components/atoms/Button"
import { Alert } from "@/components/atoms/Alert"
import { Pill } from "@/components/atoms/Pill"
import { Table } from "@/components/organisms/Table";

import { Pen, Plus, Trash } from "@/icons"
import { InfoIcon, AlertIcon, DotFillIcon, SearchIcon } from '@primer/octicons-react'

// mock data
import { tableData, tableColumns, tableActions } from "@/mock/table"
import { selectData } from "@/mock/select"
import { InputText } from "@/components/atoms/InputText";
import { Component } from "@/components/atoms/Component";
import { Select } from "@/components/atoms/Select";
import { Switch } from "@/components/atoms/Switch";
import { CheckboxGroup } from "@/components/atoms/CheckboxGroup";
import { RadioGroup } from "@/components/atoms/RadioGroup";
import { Dropdown } from "@/components/atoms/Dropdown";
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
        <>
        <div>
            <Button>Create a live event</Button>
            <InputText label="Valeur" placelholder="Test"/>
        </div>
        <div>
                <Table data={tableData} columns={tableColumns} actions={tableActions}/>
        </div>
        </>
    );
};

export default Index;
