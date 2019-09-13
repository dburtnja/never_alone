import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

export default class UserAvatar extends React.Component {

    loadUserInfo() {
        let data = JSON.parse(localStorage.getItem('userData'));
        return {
            'nameSurname': data.ig,
            'image': data.Paa
        };
    }

    render() {
        const {nameSurname, image} = this.loadUserInfo();
        return (
          <div id={'avatar'}>
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Paper>
                  <Grid container direction={'row'} spacing={1} >
                      <Grid item xs container direction={'column'}>
                          <Grid item>
                              <Typography variant={'subtitle1'}> {nameSurname} </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant={'body2'}> status </Typography>
                          </Grid>
                      </Grid>
                      <Grid item>
                          <Avatar  src={image} />
                      </Grid>
                 </Grid>
              </Paper>
          </div>
        );
    }
}