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
        width: 200,
    },
}));

function DatePickers(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label={props.title}
                type="date"
                onChange={props.onChange}
                value={props.value}
                defaultValue="2019-09-13"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
}

export default DatePickers;