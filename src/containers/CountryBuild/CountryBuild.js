import React, {Component, Fragment} from 'react';
import axios from 'axios'

import './CountryBuild.css'

class CountryBuild extends Component {

    state = {
        countries: [],
        countryFormShown: false,
        selectedCountryId: null

    };

    constructor(props) {
        super(props);
        console.log('[CountryBuild] constructor');
        console.log('[CountryBuild] State exists:', this.state.countries.length > 0);
    };

    componentDidMount() {
        console.log('[CountryBuild] DidMount');


        axios.get().then(response => {
            console.log(response);
            return Promise.all(response.data.map(country => {
                return axios.get(country.countryId).then(response => {
                    return {...country, name: response.data.name, alpha3Code: response.data.alpha3Code};
                })
            }));
        }).then( countries => {
            this.setState({ countries});
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        console.log('[CountryBuild] DidUpdate');
    }

    togglePostForm = () => {
        this.setState(prevState => {
            console.log('[CountryBuild] Toggling form');
            return {countryFormShown: !prevState.countryFormShown}
        })
    };

    postSelectedHandler = id => {

        this.setState({selectedCountryId: id});

    };


    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default CountryBuild;