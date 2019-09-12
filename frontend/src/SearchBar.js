import React from 'react';
import  { Search } from '@material-ui/icons';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import './SearchBar.css';

function SearchBar({className}) {
        return (
            <div className={'search-bar'}>
                <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="start"> <Search/> </InputAdornment>,
                    }}
                    label={'Places'}

                />
            </div>
        );
}
export default SearchBar