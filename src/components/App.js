import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import './../styles/App.css';
import unsplash from '../api/unsplash';


/*
const App = () => {
    return (
        <div className="ui container app">
            <SearchBar />
        </div>
    );
};
*/

// Class Based Component
class App extends React.Component {

    state = { images: [] }

    /* Handling Requests with Promise based syntax
    // onSearchSubmit is a Callback function to deal with the user input coming from a child component
    onSearchSubmit(term) {
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID ACCESS_KEY'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }
    */

    // Handling Requests with Async Await
    // onSearchSubmit is a Callback function to deal with the user input coming from a child component
    onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get('/search/photos', {
        params: { query: term }
    });
    this.setState({ images: response.data.results })
}

    render() {
        return (
            <div className="ui container app">
                <SearchBar onSubmit={ this.onSearchSubmit } />      {/* Pass a reference to the callback function as a prop */}
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;
