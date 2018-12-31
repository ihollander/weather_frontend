import React, { Component } from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: null }
    }

    handleInputChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.handleLocationSearch(this.state.searchTerm);
    };

    

    render() {
        return <header>
            <div>
                <form onSubmit={ this.handleFormSubmit }>
                    <input
                        type="text"
                        id="city_search"
                        placeholder="search by city"
                        onChange={this.handleInputChange}
                    />
                    <i className="fas fa-search fa-2x"></i>
                    <button type="submit"></button>
                </form>
            </div>
        </header>;
    }
}

export default Header;
