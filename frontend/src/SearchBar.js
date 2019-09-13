import React from 'react';
import  { Search } from '@material-ui/icons';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import './SearchBar.css';

function SearchBar(props) {
    return (
            <div className={'search-bar'}>
                <TextField
                    style ={{width: '40vh'}}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"> <Search/> </InputAdornment>,
                    }}
                    value={props.value}
                    onChange={props.onChange}
                    label={'Places'}
                />
            </div>
        );
}
export default SearchBar

// {/* inputRef: node => {*/}
// {/*    ref(node);*/}
// {/*      inputRef(node);*/}
// {/* },*/}

//{/* {...other}*/}