import React from "react";
import Search from "./Search";
import {Paper} from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import DatePickers from "./components/DatePicker";
import NumberInput from "./components/NumberInput";

function CreateEvent() {
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        people: '',
        note: '',
        date: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Paper>
            <Search searchIconEnabled={false} />
            <DatePickers/>
            <NumberInput handleChange={handleChange} />
        </Paper>
    )
}

export default CreateEvent;