import React, {Component, Fragment} from 'react';
import axios from 'axios'

import './CountryBuild.css'
import ListOfCountry from "../../components/ListOfCountry/ListOfCountry";

class CountryBuild extends Component {

    state = {
        countries: [],
        countryByName: [],
        countryFormShown: false,
    };

    constructor(props) {
        super(props);
        console.log('[CountryBuild] constructor');
        console.log('[CountryBuild] State exists:', this.state.countries.length > 0);
    };

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name').then(response => {
            this.setState({
                countries: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        console.log('[CountryBuild] DidUpdate');
    };

    countrySelectedHandler = name => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
            console.log(response.data);
            this.setState({
                countryByName: response.data
            })
        })
    };


    render() {
        console.log(this.state.countries);
        return (
            <Fragment>
                <section className="ListCountry">
                    {this.state.countries.map((country, id) => (
                        <ListOfCountry
                            key={id}
                            title={country.name}
                            clicked={() => this.countrySelectedHandler(country.name)}
                        />
                    ))}
                </section>
            </Fragment>
        );
    }
}

export default CountryBuild;