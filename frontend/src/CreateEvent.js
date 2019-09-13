import React from "react";
import Search from "./Search";
import {Paper, Typography} from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import DatePickers from "./components/DatePicker";
import NumberInput from "./components/NumberInput";
import Grid from "@material-ui/core/Grid";
import './CreateEvent.css';
import TextField from "@material-ui/core/TextField";
// import {} from 'react-google-places-suggest'
import { geocodeByAddress } from 'react-places-autocomplete';
import Button from "@material-ui/core/Button";

function CreateEvent() {
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        people: '',
        note: '',
        date: '',
        drinksAmount: '',
        locationName: '',
        finished: false,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const enableRedirect = name => event => {
        console.log('jeer');
      setValues({...values, [name]: true})
    };

    if (values.finished) {
        console.log("adadawd");
        return (<Redirect to={'/app'} />);
    }

    const payload = {
        id: 1,
        name: values.name,
        timestamp: values.date,
        note: values.note,
        drinks_amount: '',
        place: {
            name: values.locationName,
            location: geocodeByAddress(values.locationName)
        }
    };

    const send = () => {
        fetch('http://localhost:8000/create_event/', {
           method: "POST",
           mode: 'no-cors',
            headers: new Headers(
                {"Content-Type": "application/json",
                    "Accept":"application/json"}
            ),
            body: JSON.stringify(payload),
        })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };


    return (
        <Paper className={'root-paper'}>
            <Grid container
                  direction={'column'}
                  justify={'space-between'}
                  alignItems={'center'}
                  spacing={1}
            >
                <Grid item>
                    <Typography variant={'h3'} > Create event  </Typography>
                </Grid>
                <Grid>
                    <TextField
                        required
                        id="standard-required"
                        label="Name event"
                        defaultValue=""
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <Search searchIconEnabled={false}
                            value={values.locationName}
                    />
                </Grid>
                <TextField
                    id="filled-name"
                    label="Name"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="filled"
                />
                <Grid item>
                    <DatePickers
                        title={'Date'}
                        value={values.date}
                        onChange={handleChange('date')}
                    />
                </Grid>
                <Grid item>
                    <NumberInput
                        onChange={handleChange('people')}
                        value={values.people}
                        title={'Amount of people'}
                    />
                </Grid>
                <Grid item>
                    <NumberInput
                        onChange={handleChange('drinksAmount')}
                        value={values.drinksAmount}
                        title={'Amount of drinks'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => { send(); handleChange('finished') }}
                    >
                        Done
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CreateEvent;