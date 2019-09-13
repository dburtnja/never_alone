import React from "react";
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { GoogleLogout } from 'react-google-login';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statusEditing: false,
        };
    }

    render() {
        const {statusEditing} = this.state;
        return (
            <Paper>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item>
                        <img/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h5'}>
                            {this.props.userName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            disabled={statusEditing}
                            defaultValue={this.props.status}
                            margin="normal"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item>
                        <GoogleLogout
                            clientId="462660016574-il9iogu20ltdqar1q7lulveka6lua3cb.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={() => {
                                localStorage.removeItem('token');
                            alert('You was logged out')}}
                        />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}