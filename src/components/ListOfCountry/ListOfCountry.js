import React, {Component} from 'react';
import './ListOfCountry.css'

class ListOfCountry extends Component {

    render() {
        return (
            <div className="ListOfCountry" onClick={this.props.clicked}>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default ListOfCountry;