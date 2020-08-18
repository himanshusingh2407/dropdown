import React from 'react';
import debounce from 'lodash.debounce';
import Suggestions from '../Suggestions/Suggestions';
import { getSuggestions } from '../../Service';
import './Dropdown.css';

class Dropdown extends React.Component {
    state = {
        suggestions: [],
        selectedTitle: {},
        selectedIndex: -1
    }

    onSelect = (id, index) => {
        const movie = this.state.suggestions.find((obj) => (obj.imdbID === id));
        this.setState({ selectedTitle: movie, suggestions: [], selectedIndex: -1 });
        try {
            document.getElementById('movie-input').value = "";
        document.getElementById("movie-input").focus();
        } catch(e) {
            console.log(e);
        }
    }

    fetchSuggestions = debounce(() => {
        const queryString = document.getElementById('movie-input').value;
        if (queryString && queryString.length >= 3) { // Minimum 3 letter required to search
            getSuggestions(queryString).then((suggestions) => {
                this.setState({ suggestions });
            });
        }
    }, 200);

    handleKeyPress = (e) => {
        //Up key 
        if(e.which === 38) {
            const newIndex = (this.state.selectedIndex - 1) % this.state.suggestions.length; 
            this.setState({selectedIndex: newIndex});
        } else if(e.which === 40) { //down key
            const newIndex = (this.state.selectedIndex + 1) % this.state.suggestions.length; 
            this.setState({selectedIndex: newIndex});
        }
    }

    render() {
        return (
            <div className="dropdown-wrapper">
                    <div className="input-bar">
                        <input type="text" className="input-field" id="movie-input" onChange={this.fetchSuggestions} onKeyDown={this.handleKeyPress} autoComplete="off" />
                        {this.state.suggestions?.length >= 1 &&
                            <Suggestions data={this.state.suggestions} onSelect={this.onSelect} selectedIndex={this.state.selectedIndex}/>}
                    </div>

            </div>
        );
    }
}

export default Dropdown;
