import React, {Component} from 'react';
import axios from 'axios'

import './CountryBuild.css'
import ListOfCountry from "../../components/ListOfCountry/ListOfCountry";
import Country from "../../components/Country/Country";

class CountryBuild extends Component {

    state = {
        countries: [],
        countryByName: [],
        countryFormShown: false,
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

    countrySelectedHandler = name => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
            console.log(response.data);
            this.setState({
                countryByName: response.data
            })
        })
    };


    render() {
        return (
            <div className="CountryBuild">
                <section className="ListCountry">
                    {this.state.countries.map((country, id) => (
                        <ListOfCountry
                            key={id}
                            title={country.name}
                            clicked={() => this.countrySelectedHandler(country.name)}
                        />
                    ))}
                </section>
                <section className="Country">
                    {this.state.countryByName.map((country, id) => (
                        <Country
                            key={id}
                            title={country.name}
                            flag={country.flag}
                            capital={country.capital}
                            population={country.population}
                            borders={country.borders}
                        />
                    ))}
                </section>
            </div>
        );
    }
}

export default CountryBuild;