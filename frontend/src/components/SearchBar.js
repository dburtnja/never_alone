import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function SearchBar(props) {
    const classes = useStyles();

    return (
            <div className={'search-bar'}>
                <InputBase
                    className={classes.input}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="Search Places"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                {props.iconEnabled ? <IconButton className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton> : null}
            </div>
        );
}
export default SearchBar

// {/* inputRef: node => {*/}
// {/*    ref(node);*/}
// {/*      inputRef(node);*/}
// {/* },*/}

//{/* {...other}*/}