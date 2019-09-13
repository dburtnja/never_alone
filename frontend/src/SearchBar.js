import React from 'react';
import  { Search } from '@material-ui/icons';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import './SearchBar.css';

function SearchBar(inputProps) {
    const { inputRef = () => {}, ref, ...other } = inputProps;

    return (
            <div className={'search-bar'}>
                <TextField
                    style ={{width: '40vh'}}
                    InputProps={{
                        inputRef: node => {
                            ref(node);
                            inputRef(node);
                        },
                        startAdornment: <InputAdornment position="start"> <Search/> </InputAdornment>,
                    }}

                    label={'Places'}
                    {...other}
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