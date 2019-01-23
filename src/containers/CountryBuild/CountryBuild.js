import React, {Component, Fragment} from 'react';
import axios from 'axios'

import './CountryBuild.css'

class CountryBuild extends Component {

    state = {
        country: []

    };

    constructor(props) {
        super(props);
        console.log('[CountryBuild] constructor');
        console.log('[CountryBuild] State exists:', this.state.country.length > 0);
    };

    componentDidMount() {
        console.log('[CountryBuild] DidMount');

        const POSTS_URL = '/posts?_limit=4';
        const USER_URL = '/users/';

        axios.get(POSTS_URL).then(response => {
            return Promise.all(response.data.map(post => {
                return axios.get(USER_URL + post.userId).then(response => {
                    return {...post, author: response.data.name};
                })
            }));
        }).then(posts => {
            this.setState({posts});
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
            return {postsFormShown: !prevState.postsFormShown}
        })
    };

    postSelectedHandler = id => {

        this.setState({selectedPostId: id});

    };


    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default CountryBuild;