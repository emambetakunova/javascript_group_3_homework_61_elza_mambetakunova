import React, {Component} from 'react';
import './Country.css'

class Country extends Component {

    render() {
        return (
            <div className="Country">
                <h3>{this.props.title}</h3>
                <img alt="" src={this.props.flag} />
                <span><strong>Capital: </strong>{this.props.capital}</span>
                <span><strong>Population: </strong>{this.props.population}</span>
                <span><strong>Borders: </strong>{this.props.borders}</span>
            </div>
        );
    }
}

export default Country;