import React from "react";
import Search from "./Search";
import {Paper, Typography} from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import DatePickers from "./components/DatePicker";
import NumberInput from "./components/NumberInput";
import Grid from "@material-ui/core/Grid";
import './CreateEvent.css';
import Button from "@material-ui/core/Button";

function CreateEvent() {
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        people: '',
        note: '',
        date: '',
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
        return (<Redirect to={'/app'} />);
    }


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
                <Grid item>
                    <Search searchIconEnabled={false} />
                </Grid>
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => { handleChange('finished') }}
                    >
                        Done
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CreateEvent;