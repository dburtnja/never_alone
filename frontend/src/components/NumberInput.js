import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

function NumberInput(props) {
    const classes = useStyles();

    return (
        <TextField
            id="filled-number"
            label="Number"
            value={props.people}
            onChange={props.handleChange('people')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="filled"
        />
    );
}

export default NumberInput;