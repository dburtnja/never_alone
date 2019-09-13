import React from "react";
import SearchBar from "./SearchBar";
import Autosuggest from 'react-autosuggest';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

// const getSuggestions = value => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//
//     return inputLength === 0 ? [] : ['one'];
// };

// choose correct option from request
const getSuggestionValue = suggestion => suggestion.label;

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          value: '',
          suggestions: []
        };
    }

    handleChange = address => {
      this.setState({
          value: address
      });
    };

    handleSelect = address => {
        console.log('called');
      geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
    };

    renderSuggestion = () => (
        <PlacesAutocomplete
            value={this.state.value}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            />
    );

    onChange = (event, {newValue}) => {
        // this.setState({
        //     value: newValue
        // });
        this.handleChange(newValue);
    };

    // load data from Google Places API
    onSuggestionsFetchRequested = ({value}) => {
        console.log('olololo');
        this.setState({
            suggestions: this.handleSelect(value)
        });
    };

    // ok
    onSuggestionClearRequested = () => {
      this.setState({
          suggestions: []
      })
    };

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
          placeholder: 'Places',
          value,
          onChange: this.onChange
        };

        return (
            <Autosuggest
                renderInputComponent={SearchBar}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}