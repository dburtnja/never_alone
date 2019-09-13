import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import SearchBar from "./components/SearchBar";
import {Paper} from "@material-ui/core";

const API_KEY = "AIzaSyD-pIXF-3kG9zM9OEuE9UiEVAeTE2uTLIo";
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            value: "",
        };
    }

    handleInputChange(e) {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest(suggest) {
        console.log(suggest);

        this.setState({search: "", value: suggest.formatted_address})
    }

    render() {
        const {search, value} = this.state;
        return (
            <Paper>
            <ReactGoogleMapLoader
                params={{
                    key: API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{input: search}}
                                googleMaps={googleMaps}
                                onSelectSuggest={this.handleSelectSuggest.bind(this)}
                            >
                                <SearchBar
                                    value={value}
                                    onChange={this.handleInputChange.bind(this)}
                                    iconEnabled={this.props.searchIconEnabled}
                                />
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                }
            />
            </Paper>
        )
    }
}