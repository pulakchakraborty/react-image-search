import React from 'react';

class SearchBar extends React.Component {
    // Call this function anytime there is an change in input field
    /*
    onInputChange(event) {
        console.log(event.target.value);
    }
    */

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.term);
        // Invoke the callback function passed as a prop from the parent ‘APP‘ component
        this.props.onSubmit(this.state.term);
    }

    /*
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }
    */

    state = {term: ''};

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                {/* <form onSubmit={ e => this.onFormSubmit(e) } className="ui form"> */}
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={ e => this.setState({ term: e.target.value.toUpperCase() }) } />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
